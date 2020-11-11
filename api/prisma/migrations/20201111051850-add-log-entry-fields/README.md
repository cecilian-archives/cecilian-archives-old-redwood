# Migration `20201111051850-add-log-entry-fields`

This migration has been generated by Ben Galloway at 11/11/2020, 5:18:50 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "public"."LogEntry" ADD COLUMN "logLevel" text   NOT NULL ,
ADD COLUMN "source" text   NOT NULL 
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20201111051502-rename-relation-models..20201111051850-add-log-entry-fields
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
@@ -373,6 +373,8 @@
 model LogEntry {
   id         Int      @id @default(autoincrement())
   timestamp  DateTime @default(now())
+  logLevel   String
+  source     String
   logLine    String
 }
```

