import { Column, Entity, Index } from "typeorm";

@Index("tier_pkey", ["id"], { unique: true })
@Index("tier_tier_unique", ["tier"], { unique: true })
@Entity("tier", { schema: "public" })
export class Tier {
  @Column("uuid", {
    primary: true,
    name: "id",
    default: () => "gen_random_uuid()",
  })
  id: string;

  @Column("character varying", {
    name: "tier",
    nullable: true,
    unique: true,
    length: 100,
  })
  tier: string | null;

  @Column("text", { name: "description", nullable: true })
  description: string | null;

  @Column("integer", { name: "agents", nullable: true, default: () => "0" })
  agents: number | null;

  @Column("integer", { name: "guests", nullable: true, default: () => "0" })
  guests: number | null;

  @Column("integer", { name: "invoices", nullable: true, default: () => "0" })
  invoices: number | null;

  @Column("integer", { name: "users", nullable: true, default: () => "0" })
  users: number | null;

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
}
