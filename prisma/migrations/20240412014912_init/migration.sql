-- CreateTable
CREATE TABLE "School" (
    "id" TEXT NOT NULL,
    "uex" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "School_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "School_uex_key" ON "School"("uex");
