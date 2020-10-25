/*
Enter your query here.
*/
SET @NUMBER_A = 0;
SELECT REPEAT('* ', @NUMBER_A := @NUMBER_A + 1) FROM information_schema.tables LIMIT 20;