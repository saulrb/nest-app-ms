import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Business } from "./Business";
import { Employee } from "./Employee";
import { Reservation } from "./Reservation";

@Index("housekeeping_pkey", ["id"], { unique: true })
@Entity("housekeeping", { schema: "public" })
export class Housekeeping {
  @Column("uuid", {
    primary: true,
    name: "id",
    default: () => "gen_random_uuid()",
  })
  id: string;

  @Column("character varying", { name: "date", nullable: true, length: 20 })
  date: string | null;

  @Column("character varying", { name: "time", nullable: true, length: 20 })
  time: string | null;

  @Column("jsonb", { name: "notes", nullable: true, default: [] })
  notes: object | null;

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

  @ManyToOne(() => Business, (business) => business.housekeepings)
  @JoinColumn([{ name: "businessId", referencedColumnName: "id" }])
  business: Business;

  @ManyToOne(() => Employee, (employee) => employee.housekeepings)
  @JoinColumn([{ name: "employeeId", referencedColumnName: "id" }])
  employee: Employee;

  @ManyToOne(() => Reservation, (reservation) => reservation.housekeepings)
  @JoinColumn([{ name: "reservationId", referencedColumnName: "id" }])
  reservation: Reservation;
}
