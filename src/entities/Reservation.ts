import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Cancellation } from "./Cancellation";
import { Comission } from "./Comission";
import { Housekeeping } from "./Housekeeping";
import { Invoice } from "./Invoice";
import { Estate } from "./Estate";
import { Guest } from "./Guest";

@Index("reservation_pkey", ["id"], { unique: true })
@Entity("reservation", { schema: "public" })
export class Reservation {
  @Column("uuid", {
    primary: true,
    name: "id",
    default: () => "gen_random_uuid()",
  })
  id: string;

  @Column("character varying", {
    name: "startDate",
    nullable: true,
    length: 20,
  })
  startDate: string | null;

  @Column("character varying", { name: "endDate", nullable: true, length: 20 })
  endDate: string | null;

  @Column("integer", { name: "nights", nullable: true, default: () => "0" })
  nights: number | null;

  @Column("integer", { name: "freeNights", nullable: true, default: () => "0" })
  freeNights: number | null;

  @Column("integer", { name: "occupancy", nullable: true, default: () => "0" })
  occupancy: number | null;

  @Column("integer", { name: "adults", nullable: true, default: () => "0" })
  adults: number | null;

  @Column("integer", { name: "children", nullable: true, default: () => "0" })
  children: number | null;

  @Column("integer", { name: "infants", nullable: true, default: () => "0" })
  infants: number | null;

  @Column("integer", { name: "pets", nullable: true, default: () => "0" })
  pets: number | null;

  @Column("integer", {
    name: "extraOccupancy",
    nullable: true,
    default: () => "0",
  })
  extraOccupancy: number | null;

  @Column("integer", {
    name: "pendingAmount",
    nullable: true,
    default: () => "0",
  })
  pendingAmount: number | null;

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

  @Column("integer", { name: "taxes", nullable: true, default: () => "0" })
  taxes: number | null;

  @Column("integer", {
    name: "cleaningFee",
    nullable: true,
    default: () => "0",
  })
  cleaningFee: number | null;

  @Column("integer", { name: "serviceFee", nullable: true, default: () => "0" })
  serviceFee: number | null;

  @Column("integer", {
    name: "securityDeposit",
    nullable: true,
    default: () => "0",
  })
  securityDeposit: number | null;

  @Column("character varying", {
    name: "securityDepositFile",
    nullable: true,
    length: 255,
  })
  securityDepositFile: string | null;

  @Column("boolean", {
    name: "needCrib",
    nullable: true,
    default: () => "false",
  })
  needCrib: boolean | null;

  @Column("boolean", {
    name: "isCancelled",
    nullable: true,
    default: () => "false",
  })
  isCancelled: boolean | null;

  @Column("boolean", {
    name: "isOffer",
    nullable: true,
    default: () => "false",
  })
  isOffer: boolean | null;

  @Column("text", { name: "offerDetails", nullable: true, default: () => "''" })
  offerDetails: string | null;

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

  @OneToMany(() => Cancellation, (cancellation) => cancellation.reservation)
  cancellations: Cancellation[];

  @OneToMany(() => Comission, (comission) => comission.reservation)
  comissions: Comission[];

  @OneToMany(() => Housekeeping, (housekeeping) => housekeeping.reservation)
  housekeepings: Housekeeping[];

  @OneToMany(() => Invoice, (invoice) => invoice.reservation)
  invoices: Invoice[];

  @ManyToOne(() => Estate, (estate) => estate.reservations)
  @JoinColumn([{ name: "estateId", referencedColumnName: "id" }])
  estate: Estate;

  @ManyToOne(() => Guest, (guest) => guest.reservations)
  @JoinColumn([{ name: "guestId", referencedColumnName: "id" }])
  guest: Guest;
}
