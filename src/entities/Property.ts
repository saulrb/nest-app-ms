import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Estate } from "./Estate";
import { Business } from "./Business";

@Index("property_pkey", ["id"], { unique: true })
@Entity("property", { schema: "public" })
export class Property {
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

  @Column("text", { name: "description", nullable: true })
  description: string | null;

  @Column("integer", { name: "floors", nullable: true })
  floors: number | null;

  @Column("integer", { name: "rooms", nullable: true })
  rooms: number | null;

  @Column("jsonb", { name: "photos", nullable: true, default: [] })
  photos: object | null;

  @Column("jsonb", {
    name: "amenities",
    nullable: true,
    default: [
      { i18n: "wifi", name: "Wifi", exists: true },
      { i18n: "parking", name: "Parking", exists: true },
      { i18n: "kitchen", name: "Kitchen", exists: true },
      { i18n: "tv", name: "TV", exists: true },
      { i18n: "washer", name: "Washer", exists: true },
      { i18n: "dryer", name: "Dryer", exists: true },
      { i18n: "heating", name: "Heating", exists: true },
      { i18n: "airConditioning", name: "Air Conditioning", exists: true },
      { i18n: "iron", name: "Iron", exists: true },
      { i18n: "hairDryer", name: "Hair Dryer", exists: true },
      { i18n: "smokeDetector", name: "Smoke Detector", exists: true },
      {
        i18n: "carbonMonoxideDetector",
        name: "Carbon Monoxide Detector",
        exists: true,
      },
      { i18n: "firstAidKit", name: "First Aid Kit", exists: true },
      { i18n: "fireExtinguisher", name: "Fire Extinguisher", exists: true },
    ],
  })
  amenities: object | null;

  @Column("jsonb", {
    name: "services",
    nullable: true,
    default: [
      { i18n: "airportShuttle", name: "Airport Shuttle", exists: true },
      { i18n: "breakfast", name: "Breakfast", exists: true },
      { i18n: "elevator", name: "Elevator", exists: true },
      { i18n: "gym", name: "Gym", exists: true },
      { i18n: "hotTub", name: "Hot Tub", exists: true },
      { i18n: "pool", name: "Pool", exists: true },
      { i18n: "spa", name: "Spa", exists: true },
      { i18n: "parking", name: "Parking", exists: true },
      { i18n: "petsAllowed", name: "Pets Allowed", exists: true },
      { i18n: "smokingAllowed", name: "Smoking Allowed", exists: true },
      { i18n: "eventsAllowed", name: "Events Allowed", exists: true },
      {
        i18n: "wheelchairAccessible",
        name: "Wheelchair Accessible",
        exists: true,
      },
    ],
  })
  services: object | null;

  @Column("jsonb", {
    name: "sleepingArrangements",
    nullable: true,
    default: [
      {
        cribs: 1,
        futons: 0,
        bedrooom: 1,
        bunkBeds: 0,
        hammocks: 0,
        sofaBeds: 0,
        kingSizeBeds: 1,
        airMattresses: 0,
        queenSizeBeds: 0,
        doubleSizeBeds: 0,
        singleSizeBeds: 0,
      },
      {
        cribs: 0,
        futons: 0,
        bedrooom: 2,
        bunkBeds: 0,
        hammocks: 0,
        sofaBeds: 0,
        kingSizeBeds: 0,
        airMattresses: 0,
        queenSizeBeds: 1,
        doubleSizeBeds: 0,
        singleSizeBeds: 0,
      },
      {
        cribs: 0,
        futons: 0,
        bedrooom: 3,
        bunkBeds: 0,
        hammocks: 0,
        sofaBeds: 0,
        kingSizeBeds: 0,
        airMattresses: 0,
        queenSizeBeds: 2,
        doubleSizeBeds: 0,
        singleSizeBeds: 0,
      },
    ],
  })
  sleepingArrangements: object | null;

  @Column("text", { name: "generalRules", nullable: true })
  generalRules: string | null;

  @Column("text", { name: "safetyRules", nullable: true })
  safetyRules: string | null;

  @Column("text", { name: "cancellationPolicy", nullable: true })
  cancellationPolicy: string | null;

  @Column("character varying", { name: "checkIn", nullable: true, length: 50 })
  checkIn: string | null;

  @Column("character varying", { name: "checkOut", nullable: true, length: 50 })
  checkOut: string | null;

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

  @OneToMany(() => Estate, (estate) => estate.property)
  estates: Estate[];

  @ManyToOne(() => Business, (business) => business.properties)
  @JoinColumn([{ name: "businessId", referencedColumnName: "id" }])
  business: Business;
}
