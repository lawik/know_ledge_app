import { LlamaContext, initLlama } from 'llama.rn'
import { NativeContextParams } from 'llama.rn/lib/typescript/NativeRNLlama'

// Initial a Llama context with the model (may take a while)
export const init = async () => {
    console.log("loading context...")
    const context = await initLlama({
        model: 'file://../llama-2-7b-chat.Q2_K.gguf',
        use_mlock: true,
        n_ctx: 2048,
        n_gpu_layers: 1, // > 0: enable Metal on iOS
        // embedding: true, // use embedding
    })
    console.log("context loaded")
    return context;
}

export const request = async (context: LlamaContext, input: String) => {
    console.log("making request...")
    const { text, timings } = await context.completion(
        {
            prompt: 'This is a conversation between user and llama, a friendly chatbot. respond in simple markdown.\n\nUser: ' + input + '\nLlama:',
            n_predict: 100,
            stop: ['</s>', 'Llama:', 'User:'],
            // n_threads: 4,
        },
        (data) => {
            // This is a partial completion callback
            console.log("partial", data)
            const { token } = data
        },
    )
    console.log('Result:', text)
    console.log('Timings:', timings)
    return text
}