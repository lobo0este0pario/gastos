import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("usuario_pkey", ["id"], { unique: true })
@Entity("usuario", { schema: "public" })
export class Usuario {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "usuario", nullable: true, length: 50 })
  usuario: string | null;

  @Column("character varying", { name: "clave", nullable: true, length: 50 })
  clave: string | null;

  @Column("date", { name: "fecha_inicio", nullable: true })
  fechaInicio: string | null;

  @Column("date", { name: "fecha_fin", nullable: true })
  fechaFin: string | null;

  @Column("character varying", { name: "estatus", nullable: true, length: 50 })
  estatus: string | null;
}
