import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Property } from "./Property";
import { Reservation } from "./Reservation";

@Index("estate_pkey", ["id"], { unique: true })
@Entity("estate", { schema: "public" })
export class Estate {
  @Column("uuid", {
    primary: true,
    name: "id",
    default: () => "gen_random_uuid()",
  })
  id: string;

  @Column("character varying", { name: "type", nullable: true, length: 100 })
  type: string | null;

  @Column("character varying", {
    name: "floor",
    nullable: true,
    length: 10,
    default: () => "'0'",
  })
  floor: string | null;

  @Column("character varying", {
    name: "roomNumber",
    nullable: true,
    length: 10,
    default: () => "'0'",
  })
  roomNumber: string | null;

  @Column("character varying", {
    name: "roomType",
    nullable: true,
    length: 100,
  })
  roomType: string | null;

  @Column("integer", {
    name: "insideBathrooms",
    nullable: true,
    default: () => "1",
  })
  insideBathrooms: number | null;

  @Column("integer", {
    name: "outsideBathrooms",
    nullable: true,
    default: () => "0",
  })
  outsideBathrooms: number | null;

  @Column("integer", { name: "maxGuests", nullable: true, default: () => "6" })
  maxGuests: number | null;

  @Column("integer", { name: "minGuests", nullable: true, default: () => "1" })
  minGuests: number | null;

  @Column("integer", {
    name: "cleaningFee",
    nullable: true,
    default: () => "0",
  })
  cleaningFee: number | null;

  @Column("integer", {
    name: "extraGuestFee",
    nullable: true,
    default: () => "0",
  })
  extraGuestFee: number | null;

  @Column("integer", {
    name: "extraBedFee",
    nullable: true,
    default: () => "0",
  })
  extraBedFee: number | null;

  @Column("integer", {
    name: "securityDepositFee",
    nullable: true,
    default: () => "0",
  })
  securityDepositFee: number | null;

  @Column("integer", { name: "weekendFee", nullable: true, default: () => "0" })
  weekendFee: number | null;

  @Column("integer", { name: "weekdayFee", nullable: true, default: () => "0" })
  weekdayFee: number | null;

  @Column("integer", {
    name: "initialOfferFee",
    nullable: true,
    default: () => "0",
  })
  initialOfferFee: number | null;

  @Column("integer", {
    name: "secondOfferFee",
    nullable: true,
    default: () => "0",
  })
  secondOfferFee: number | null;

  @Column("integer", {
    name: "emergencyOfferFee",
    nullable: true,
    default: () => "0",
  })
  emergencyOfferFee: number | null;

  @Column("integer", { name: "highestFee", nullable: true, default: () => "0" })
  highestFee: number | null;

  @Column("integer", { name: "lowestFee", nullable: true, default: () => "0" })
  lowestFee: number | null;

  @Column("boolean", { name: "hasWifi", nullable: true, default: () => "true" })
  hasWifi: boolean | null;

  @Column("boolean", { name: "hasTv", nullable: true, default: () => "true" })
  hasTv: boolean | null;

  @Column("boolean", {
    name: "hasNetflix",
    nullable: true,
    default: () => "true",
  })
  hasNetflix: boolean | null;

  @Column("boolean", {
    name: "hasHeat",
    nullable: true,
    default: () => "false",
  })
  hasHeat: boolean | null;

  @Column("boolean", { name: "hasAc", nullable: true, default: () => "false" })
  hasAc: boolean | null;

  @Column("boolean", {
    name: "hasIron",
    nullable: true,
    default: () => "false",
  })
  hasIron: boolean | null;

  @Column("boolean", {
    name: "hasDesk",
    nullable: true,
    default: () => "false",
  })
  hasDesk: boolean | null;

  @Column("boolean", {
    name: "hasKitchen",
    nullable: true,
    default: () => "true",
  })
  hasKitchen: boolean | null;

  @Column("boolean", { name: "hasCrib", nullable: true, default: () => "true" })
  hasCrib: boolean | null;

  @Column("boolean", {
    name: "isPetsAllowed",
    nullable: true,
    default: () => "false",
  })
  isPetsAllowed: boolean | null;

  @Column("boolean", {
    name: "isSmokingAllowed",
    nullable: true,
    default: () => "false",
  })
  isSmokingAllowed: boolean | null;

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

  @ManyToOne(() => Property, (property) => property.estates)
  @JoinColumn([{ name: "propertyId", referencedColumnName: "id" }])
  property: Property;

  @OneToMany(() => Reservation, (reservation) => reservation.estate)
  reservations: Reservation[];
}
