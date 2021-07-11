import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("persona_pkey", ["id"], { unique: true })
@Entity("persona", { schema: "public" })
export class Persona {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "nombre", nullable: true, length: 50 })
  nombre: string | null;

  @Column("character varying", {
    name: "ap_paterno",
    nullable: true,
    length: 50,
  })
  apPaterno: string | null;

  @Column("character varying", {
    name: "ap_materno",
    nullable: true,
    length: 50,
  })
  apMaterno: string | null;

  @Column("character varying", { name: "genero", nullable: true, length: 50 })
  genero: string | null;

  @Column("character varying", {
    name: "fecha_nacimiento",
    nullable: true,
    length: 50,
  })
  fechaNacimiento: string | null;
}
