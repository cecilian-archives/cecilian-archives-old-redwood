# Migration `20201202102936-remove-logentries-model`

This migration has been generated by Ben Galloway at 12/2/2020, 10:29:36 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
DROP TABLE "LogEntry"
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20201202071824-make-role-names-unique..20201202102936-remove-logentries-model
--- datamodel.dml
+++ datamodel.dml
@@ -1,7 +1,7 @@
 datasource DS {
   provider = "postgresql"
-  url = "***"
+  url = "***"
 }
 generator client {
   provider      = "prisma-client-js"
@@ -363,18 +363,4 @@
   addedAt      DateTime @default(now())
   updatedAt    DateTime @updatedAt
   removedAt    DateTime?
 }
-
-
-// ---------------------------------------------------------
-//
-//  AUDIT LOG
-//
-// ---------------------------------------------------------
-
-model LogEntry {
-  id         Int      @id @default(autoincrement())
-  timestamp  DateTime @default(now())
-  logLevel   String
-  logLine    String
-}
```

