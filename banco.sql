CREATE TABLE empresa (
	"id" serial NOT NULL,
	"name" TEXT NOT NULL UNIQUE,
	"cnpj" integer NOT NULL UNIQUE,
	CONSTRAINT "empresa_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE cliente (
	"id" serial NOT NULL,
	"name" TEXT NOT NULL UNIQUE,
	"password" TEXT NOT NULL,
	CONSTRAINT "cliente_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE produto (
	"id" serial NOT NULL,
	"empresaId" integer NOT NULL,
	"name" TEXT NOT NULL,
	"price" decimal NOT NULL,
	CONSTRAINT "produto_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE compra (
	"id" serial NOT NULL,
	"clienteId" integer NOT NULL,
	"valorTotal" integer NOT NULL,
	"produtos" integer NOT NULL,
	CONSTRAINT "compra_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



ALTER TABLE "produto" ADD CONSTRAINT "produto_fk0" FOREIGN KEY ("empresaId") REFERENCES "empresa"("id");

ALTER TABLE "compra" ADD CONSTRAINT "compra_fk0" FOREIGN KEY ("clienteId") REFERENCES "cliente"("id");
ALTER TABLE "compra" ADD CONSTRAINT "compra_fk1" FOREIGN KEY ("produtos") REFERENCES "produto"("id");

