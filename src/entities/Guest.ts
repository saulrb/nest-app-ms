import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Business } from "./Business";
import { Reservation } from "./Reservation";

@Index("guest_pkey", ["id"], { unique: true })
@Entity("guest", { schema: "public" })
export class Guest {
  @Column("uuid", {
    primary: true,
    name: "id",
    default: () => "gen_random_uuid()",
  })
  id: string;

  @Column("character varying", {
    name: "fullName",
    nullable: true,
    length: 200,
  })
  fullName: string | null;

  @Column("character varying", { name: "email", nullable: true, length: 255 })
  email: string | null;

  @Column("character varying", { name: "phone", nullable: true, length: 40 })
  phone: string | null;

  @Column("character varying", { name: "website", nullable: true, length: 200 })
  website: string | null;

  @Column("character varying", {
    name: "facebook",
    nullable: true,
    length: 200,
  })
  facebook: string | null;

  @Column("character varying", {
    name: "instagram",
    nullable: true,
    length: 200,
  })
  instagram: string | null;

  @Column("character varying", { name: "gender", nullable: true, length: 50 })
  gender: string | null;

  @Column("character varying", { name: "birthday", nullable: true, length: 20 })
  birthday: string | null;

  @Column("character varying", {
    name: "organization",
    nullable: true,
    length: 50,
  })
  organization: string | null;

  @Column("character varying", {
    name: "taxIdentifier",
    nullable: true,
    length: 50,
  })
  taxIdentifier: string | null;

  @Column("text", { name: "notes", nullable: true })
  notes: string | null;

  @Column("character varying", { name: "photo", nullable: true, length: 250 })
  photo: string | null;

  @Column("timestamp without time zone", {
    name: "createdAt",
    nullable: true,
    default: () => "now()",
  })
  createdAt: Date | null;

  @Column("timestamp without time zone", {
    name: "updatedAt",
    nullable: true,
    default: () => "now()",
  })
  updatedAt: Date | null;

  @ManyToOne(() => Business, (business) => business.guests)
  @JoinColumn([{ name: "businessId", referencedColumnName: "id" }])
  business: Business;

  @OneToMany(() => Reservation, (reservation) => reservation.guest)
  reservations: Reservation[];
}
