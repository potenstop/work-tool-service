/**
 *
 * 功能描述: 数据配置
 *
 * @className MysqlWorkHelpConfiguration
 * @projectName papio
 * @author yanshaowen
 * @date 2019/1/22 9:39
 */
import {Bean, Configuration, IDataSource, MapperScan, TypeDataSource} from "papio";

@Configuration
@MapperScan("@dao/work-help")
export class MysqlWorkHelpConfiguration {
    @Bean
    public dataSourceMaster(): IDataSource {
        const typeDataSource = new TypeDataSource();
        typeDataSource.setName("mysql-master");
        typeDataSource.setUrl("mysql://127.0.0.1:3306/work_help?logging=true");
        typeDataSource.setUsername("work_help_root");
        typeDataSource.setPassword("123456");
        typeDataSource.setEntities(["src/model/dto/common-util/*.ts"]);
        typeDataSource.build();
        return typeDataSource;
    }
}
