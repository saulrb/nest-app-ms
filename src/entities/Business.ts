import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Agent } from "./Agent";
import { User } from "./User";
import { Employee } from "./Employee";
import { Guest } from "./Guest";
import { Housekeeping } from "./Housekeeping";
import { Invoice } from "./Invoice";
import { Property } from "./Property";

@Index("business_pkey", ["id"], { unique: true })
@Entity("business", { schema: "public" })
export class Business {
  @Column("uuid", {
    primary: true,
    name: "id",
    default: () => "gen_random_uuid()",
  })
  id: string;

  @Column("character varying", { name: "type", nullable: true, length: 100 })
  type: string | null;

  @Column("character varying", { name: "name", nullable: true, length: 255 })
  name: string | null;

  @Column("character varying", { name: "slug", nullable: true, length: 255 })
  slug: string | null;

  @Column("character varying", { name: "email", nullable: true, length: 255 })
  email: string | null;

  @Column("character varying", { name: "phone", nullable: true, length: 50 })
  phone: string | null;

  @Column("character varying", {
    name: "priceRange",
    nullable: true,
    length: 20,
  })
  priceRange: string | null;

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

  @Column("character varying", { name: "logo", nullable: true, length: 255 })
  logo: string | null;

  @Column("integer", { name: "raiting", nullable: true })
  raiting: number | null;

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

  @Column("boolean", { name: "active", nullable: true, default: () => "false" })
  active: boolean | null;

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

  @OneToMany(() => Agent, (agent) => agent.business)
  agents: Agent[];

  @ManyToOne(() => User, (user) => user.businesses)
  @JoinColumn([{ name: "userId", referencedColumnName: "id" }])
  user: User;

  @OneToMany(() => Employee, (employee) => employee.business)
  employees: Employee[];

  @OneToMany(() => Guest, (guest) => guest.business)
  guests: Guest[];

  @OneToMany(() => Housekeeping, (housekeeping) => housekeeping.business)
  housekeepings: Housekeeping[];

  @OneToMany(() => Invoice, (invoice) => invoice.business)
  invoices: Invoice[];

  @OneToMany(() => Property, (property) => property.business)
  properties: Property[];
}
