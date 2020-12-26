COMMENT ON COLUMN "public"."users"."name" IS E'';
alter table "public"."users" rename column "first_name" to "name";
