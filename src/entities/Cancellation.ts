import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Reservation } from "./Reservation";

@Index("cancellation_pkey", ["id"], { unique: true })
@Entity("cancellation", { schema: "public" })
export class Cancellation {
  @Column("uuid", {
    primary: true,
    name: "id",
    default: () => "gen_random_uuid()",
  })
  id: string;

  @Column("character varying", {
    name: "cancellationDate",
    nullable: true,
    length: 20,
  })
  cancellationDate: string | null;

  @Column("integer", {
    name: "securityDepositReturned",
    nullable: true,
    default: () => "0",
  })
  securityDepositReturned: number | null;

  @Column("integer", {
    name: "securityDepositHeld",
    nullable: true,
    default: () => "0",
  })
  securityDepositHeld: number | null;

  @Column("character varying", {
    name: "securityDepositFile",
    nullable: true,
    length: 255,
  })
  securityDepositFile: string | null;

  @Column("text", { name: "reason", nullable: true, default: () => "''" })
  reason: string | null;

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

  @ManyToOne(() => Reservation, (reservation) => reservation.cancellations)
  @JoinColumn([{ name: "reservationId", referencedColumnName: "id" }])
  reservation: Reservation;
}
