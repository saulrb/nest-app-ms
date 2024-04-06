import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Business } from "./Business";
import { Housekeeping } from "./Housekeeping";

@Index("employee_pkey", ["id"], { unique: true })
@Entity("employee", { schema: "public" })
export class Employee {
  @Column("uuid", {
    primary: true,
    name: "id",
    default: () => "gen_random_uuid()",
  })
  id: string;

  @Column("character varying", {
    name: "designation",
    nullable: true,
    length: 100,
  })
  designation: string | null;

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

  @Column("integer", { name: "salary", nullable: true, default: () => "0" })
  salary: number | null;

  @Column("character varying", {
    name: "jobTitle",
    nullable: true,
    length: 100,
  })
  jobTitle: string | null;

  @Column("character varying", { name: "photo", nullable: true, length: 255 })
  photo: string | null;

  @Column("character varying", {
    name: "addressLine1",
    nullable: true,
    length: 255,
  })
  addressLine1: string | null;

  @Column("character varying", {
    name: "addressLine2",
    nullable: true,
    length: 255,
  })
  addressLine2: string | null;

  @Column("character varying", { name: "city", nullable: true, length: 255 })
  city: string | null;

  @Column("character varying", { name: "state", nullable: true, length: 255 })
  state: string | null;

  @Column("character varying", { name: "country", nullable: true, length: 255 })
  country: string | null;

  @Column("character varying", { name: "zipCode", nullable: true, length: 20 })
  zipCode: string | null;

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

  @ManyToOne(() => Business, (business) => business.employees)
  @JoinColumn([{ name: "businessId", referencedColumnName: "id" }])
  business: Business;

  @OneToMany(() => Housekeeping, (housekeeping) => housekeeping.employee)
  housekeepings: Housekeeping[];
}
