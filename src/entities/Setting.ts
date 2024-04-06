import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { User } from "./User";

@Index("setting_pkey", ["id"], { unique: true })
@Entity("setting", { schema: "public" })
export class Setting {
  @Column("uuid", {
    primary: true,
    name: "id",
    default: () => "gen_random_uuid()",
  })
  id: string;

  @Column("character varying", {
    name: "currency",
    nullable: true,
    length: 10,
    default: () => "'USD'",
  })
  currency: string | null;

  @Column("character varying", {
    name: "language",
    nullable: true,
    length: 10,
    default: () => "'en-us'",
  })
  language: string | null;

  @Column("character varying", {
    name: "timezone",
    nullable: true,
    length: 50,
    default: () => "'UTC'",
  })
  timezone: string | null;

  @Column("integer", {
    name: "taxesPercentage",
    nullable: true,
    default: () => "0",
  })
  taxesPercentage: number | null;

  @Column("integer", {
    name: "minimumBooking",
    nullable: true,
    default: () => "1",
  })
  minimumBooking: number | null;

  @Column("character varying", {
    name: "theme",
    nullable: true,
    length: 20,
    default: () => "'dark'",
  })
  theme: string | null;

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

  @ManyToOne(() => User, (user) => user.settings)
  @JoinColumn([{ name: "userId", referencedColumnName: "id" }])
  user: User;
}
