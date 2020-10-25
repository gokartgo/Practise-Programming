SELECT REPEAT('* ', @NUMBER := @NUMBER - 1) FROM information_schema.tables,(SELECT @NUMBER:=21 as num) some_name_of_subquery LIMIT 21
-- another way @ use for define variable and information_schema is default table of mysql
-- SET @NUMBER_A = 21;
-- SELECT REPEAT('* ', @NUMBER_A := @NUMBER_A - 1) FROM information_schema.tables LIMIT 20;