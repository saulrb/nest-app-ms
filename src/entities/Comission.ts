import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Agent } from "./Agent";
import { Reservation } from "./Reservation";

@Index("comission_pkey", ["id"], { unique: true })
@Entity("comission", { schema: "public" })
export class Comission {
  @Column("uuid", {
    primary: true,
    name: "id",
    default: () => "gen_random_uuid()",
  })
  id: string;

  @Column("integer", { name: "commission", nullable: true, default: () => "0" })
  commission: number | null;

  @Column("boolean", {
    name: "isOffer",
    nullable: true,
    default: () => "false",
  })
  isOffer: boolean | null;

  @Column("boolean", { name: "isPaid", nullable: true, default: () => "false" })
  isPaid: boolean | null;

  @Column("character varying", {
    name: "paymentMethod",
    nullable: true,
    length: 100,
  })
  paymentMethod: string | null;

  @Column("character varying", { name: "month", nullable: true, length: 20 })
  month: string | null;

  @Column("character varying", { name: "year", nullable: true, length: 20 })
  year: string | null;

  @Column("integer", {
    name: "reservationCost",
    nullable: true,
    default: () => "0",
  })
  reservationCost: number | null;

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

  @ManyToOne(() => Agent, (agent) => agent.comissions)
  @JoinColumn([{ name: "agentId", referencedColumnName: "id" }])
  agent: Agent;

  @ManyToOne(() => Reservation, (reservation) => reservation.comissions)
  @JoinColumn([{ name: "reservationId", referencedColumnName: "id" }])
  reservation: Reservation;
}
