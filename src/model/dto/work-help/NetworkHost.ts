import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
@Entity("network_host")
export default class NetworkHost {
    @PrimaryGeneratedColumn({name: "network_host_id"})
    public networkHostId: number;

    @Column({name: "create_time"})
    public createTime: Date;

    @Column({name: "update_time"})
    public updateTime: Date;

    @Column({name: "hostname"})
    public hostname: string;

    @Column({name: "shell_http_url"})
    public shellHttpUrl: string;

    @Column({name: "system"})
    public system: number;

    @Column({name: "ipv4"})
    public ipv4: string;

}
