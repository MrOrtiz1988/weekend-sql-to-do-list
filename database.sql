CREATE TABLE "todo"(
	"id" SERIAL PRIMARY KEY,
	"task" VARCHAR(255) NOT NULL,
	"complete" VARCHAR(100)
);
--added some starter data
INSERT INTO "todo" 
("task", "complete")
VALUES 
('wash dishes', 'Not Complete'),
('File taxes', 'Not Complete'),
('Change oil in car', 'Not Complete');

SELECT * FROM "todo";