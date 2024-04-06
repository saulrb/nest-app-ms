import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Business } from "./Business";
import { User } from "./User";
import { Comission } from "./Comission";

@Index("agent_pkey", ["id"], { unique: true })
@Entity("agent", { schema: "public" })
export class Agent {
  @Column("uuid", {
    primary: true,
    name: "id",
    default: () => "gen_random_uuid()",
  })
  id: string;

  @Column("boolean", {
    name: "isCompany",
    nullable: true,
    default: () => "false",
  })
  isCompany: boolean | null;

  @Column("character varying", {
    name: "comissionType",
    nullable: true,
    length: 100,
    default: () => "'fixed'",
  })
  comissionType: string | null;

  @Column("integer", {
    name: "highestCommissionWihoutOffer",
    nullable: true,
    default: () => "0",
  })
  highestCommissionWihoutOffer: number | null;

  @Column("integer", {
    name: "highestCommissionWithOffer",
    nullable: true,
    default: () => "0",
  })
  highestCommissionWithOffer: number | null;

  @Column("integer", {
    name: "lowestCommissionWihoutOffer",
    nullable: true,
    default: () => "0",
  })
  lowestCommissionWihoutOffer: number | null;

  @Column("integer", {
    name: "lowestCommissionWithOffer",
    nullable: true,
    default: () => "0",
  })
  lowestCommissionWithOffer: number | null;

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

  @ManyToOne(() => Business, (business) => business.agents)
  @JoinColumn([{ name: "businessId", referencedColumnName: "id" }])
  business: Business;

  @ManyToOne(() => User, (user) => user.agents)
  @JoinColumn([{ name: "userId", referencedColumnName: "id" }])
  user: User;

  @OneToMany(() => Comission, (comission) => comission.agent)
  comissions: Comission[];
}
