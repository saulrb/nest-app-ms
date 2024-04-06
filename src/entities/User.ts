import { Column, Entity, Index, OneToMany } from "typeorm";
import { Agent } from "./Agent";
import { Business } from "./Business";
import { Setting } from "./Setting";

@Index("user_code_unique", ["code"], { unique: true })
@Index("user_email_unique", ["email"], { unique: true })
@Index("user_pkey", ["id"], { unique: true })
@Entity("user", { schema: "public" })
export class User {
  @Column("uuid", {
    primary: true,
    name: "id",
    default: () => "gen_random_uuid()",
  })
  id: string;

  @Column("character varying", { name: "tier", nullable: true, length: 100 })
  tier: string | null;

  @Column("character varying", { name: "role", nullable: true, length: 100 })
  role: string | null;

  @Column("character varying", {
    name: "email",
    nullable: true,
    unique: true,
    length: 255,
  })
  email: string | null;

  @Column("character varying", { name: "password", nullable: true, length: 40 })
  password: string | null;

  @Column("character varying", {
    name: "fullName",
    nullable: true,
    length: 200,
  })
  fullName: string | null;

  @Column("character varying", { name: "phone", nullable: true, length: 50 })
  phone: string | null;

  @Column("character varying", { name: "avatar", nullable: true, length: 255 })
  avatar: string | null;

  @Column("character varying", { name: "birthday", nullable: true, length: 20 })
  birthday: string | null;

  @Column("character varying", { name: "website", nullable: true, length: 255 })
  website: string | null;

  @Column("character varying", {
    name: "code",
    nullable: true,
    unique: true,
    length: 10,
  })
  code: string | null;

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

  @OneToMany(() => Agent, (agent) => agent.user)
  agents: Agent[];

  @OneToMany(() => Business, (business) => business.user)
  businesses: Business[];

  @OneToMany(() => Setting, (setting) => setting.user)
  settings: Setting[];
}
