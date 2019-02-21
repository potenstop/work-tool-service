import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
@Entity("shell_template")
export default class ShellTemplate {
    @PrimaryGeneratedColumn({name: "shell_template_id"})
    public shellTemplateId: number;

    @Column({name: "create_time"})
    public createTime: Date;

    @Column({name: "update_time"})
    public updateTime: Date;

    @Column({name: "is_delete"})
    public isDelete: number;

    @Column({name: "template_name"})
    public templateName: string;

    @Column({name: "exec_shell_content"})
    public execShellContent: string;

}
