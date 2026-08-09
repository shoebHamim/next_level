-- RenameColumn
-- Renaming instead of drop+add preserves existing data (posts.author_id had 4 non-null rows).
ALTER TABLE "posts" RENAME COLUMN "authorId" TO "author_id";
