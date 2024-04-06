import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Business } from "./Business";
import { Reservation } from "./Reservation";

@Index("invoice_pkey", ["id"], { unique: true })
@Entity("invoice", { schema: "public" })
export class Invoice {
  @Column("uuid", {
    primary: true,
    name: "id",
    default: () => "gen_random_uuid()",
  })
  id: string;

  @Column("integer", {
    name: "invoiceNumber",
    nullable: true,
    default: () => "0",
  })
  invoiceNumber: number | null;

  @Column("character varying", {
    name: "invoiceDate",
    nullable: true,
    length: 20,
  })
  invoiceDate: string | null;

  @Column("character varying", { name: "dueDate", nullable: true, length: 20 })
  dueDate: string | null;

  @Column("integer", {
    name: "totalAmount",
    nullable: true,
    default: () => "0",
  })
  totalAmount: number | null;

  @Column("integer", { name: "paidAmount", nullable: true, default: () => "0" })
  paidAmount: number | null;

  @Column("integer", { name: "discount", nullable: true, default: () => "0" })
  discount: number | null;

  @Column("character varying", {
    name: "status",
    nullable: true,
    length: 20,
    default: () => "'pending'",
  })
  status: string | null;

  @Column("character varying", {
    name: "paymentMethod",
    nullable: true,
    length: 100,
  })
  paymentMethod: string | null;

  @Column("character varying", {
    name: "paymentDate",
    nullable: true,
    length: 20,
  })
  paymentDate: string | null;

  @Column("integer", { name: "nights", nullable: true, default: () => "1" })
  nights: number | null;

  @Column("integer", { name: "nightPrice", nullable: true, default: () => "0" })
  nightPrice: number | null;

  @Column("integer", {
    name: "cleaningFee",
    nullable: true,
    default: () => "0",
  })
  cleaningFee: number | null;

  @Column("integer", { name: "serviceFee", nullable: true, default: () => "0" })
  serviceFee: number | null;

  @Column("integer", { name: "tax", nullable: true, default: () => "0" })
  tax: number | null;

  @Column("character varying", {
    name: "currency",
    nullable: true,
    length: 10,
    default: () => "'USD'",
  })
  currency: string | null;

  @Column("character varying", { name: "checkIn", nullable: true, length: 20 })
  checkIn: string | null;

  @Column("character varying", { name: "checkOut", nullable: true, length: 20 })
  checkOut: string | null;

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

  @ManyToOne(() => Business, (business) => business.invoices)
  @JoinColumn([{ name: "businessId", referencedColumnName: "id" }])
  business: Business;

  @ManyToOne(() => Reservation, (reservation) => reservation.invoices)
  @JoinColumn([{ name: "reservationId", referencedColumnName: "id" }])
  reservation: Reservation;
}
