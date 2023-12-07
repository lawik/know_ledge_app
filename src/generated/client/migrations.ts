export default [
  {
    "statements": [
      "CREATE TABLE \"accounts\" (\n  \"id\" TEXT NOT NULL,\n  \"email\" TEXT NOT NULL,\n  \"created_at\" TEXT NOT NULL,\n  \"updated_at\" TEXT NOT NULL,\n  CONSTRAINT \"accounts_pkey\" PRIMARY KEY (\"id\")\n) WITHOUT ROWID;\n",
      "-- Toggles for turning the triggers on and off\nINSERT OR IGNORE INTO _electric_trigger_settings(tablename,flag) VALUES ('main.accounts', 1);",
      "  /* Triggers for table accounts */\n\n  -- ensures primary key is immutable\n  DROP TRIGGER IF EXISTS update_ensure_main_accounts_primarykey;",
      "CREATE TRIGGER update_ensure_main_accounts_primarykey\n  BEFORE UPDATE ON \"main\".\"accounts\"\nBEGIN\n  SELECT\n    CASE\n      WHEN old.\"id\" != new.\"id\" THEN\n      \t\tRAISE (ABORT, 'cannot change the value of column id as it belongs to the primary key')\n    END;\nEND;",
      "-- Triggers that add INSERT, UPDATE, DELETE operation to the _opslog table\nDROP TRIGGER IF EXISTS insert_main_accounts_into_oplog;",
      "CREATE TRIGGER insert_main_accounts_into_oplog\n   AFTER INSERT ON \"main\".\"accounts\"\n   WHEN 1 == (SELECT flag from _electric_trigger_settings WHERE tablename == 'main.accounts')\nBEGIN\n  INSERT INTO _electric_oplog (namespace, tablename, optype, primaryKey, newRow, oldRow, timestamp)\n  VALUES ('main', 'accounts', 'INSERT', json_object('id', new.\"id\"), json_object('created_at', new.\"created_at\", 'email', new.\"email\", 'id', new.\"id\", 'updated_at', new.\"updated_at\"), NULL, NULL);\nEND;",
      "DROP TRIGGER IF EXISTS update_main_accounts_into_oplog;",
      "CREATE TRIGGER update_main_accounts_into_oplog\n   AFTER UPDATE ON \"main\".\"accounts\"\n   WHEN 1 == (SELECT flag from _electric_trigger_settings WHERE tablename == 'main.accounts')\nBEGIN\n  INSERT INTO _electric_oplog (namespace, tablename, optype, primaryKey, newRow, oldRow, timestamp)\n  VALUES ('main', 'accounts', 'UPDATE', json_object('id', new.\"id\"), json_object('created_at', new.\"created_at\", 'email', new.\"email\", 'id', new.\"id\", 'updated_at', new.\"updated_at\"), json_object('created_at', old.\"created_at\", 'email', old.\"email\", 'id', old.\"id\", 'updated_at', old.\"updated_at\"), NULL);\nEND;",
      "DROP TRIGGER IF EXISTS delete_main_accounts_into_oplog;",
      "CREATE TRIGGER delete_main_accounts_into_oplog\n   AFTER DELETE ON \"main\".\"accounts\"\n   WHEN 1 == (SELECT flag from _electric_trigger_settings WHERE tablename == 'main.accounts')\nBEGIN\n  INSERT INTO _electric_oplog (namespace, tablename, optype, primaryKey, newRow, oldRow, timestamp)\n  VALUES ('main', 'accounts', 'DELETE', json_object('id', old.\"id\"), NULL, json_object('created_at', old.\"created_at\", 'email', old.\"email\", 'id', old.\"id\", 'updated_at', old.\"updated_at\"), NULL);\nEND;"
    ],
    "version": "20231207084701"
  }
]