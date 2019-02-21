"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 * 功能描述: 数据配置
 *
 * @className DataSourceConfiguration
 * @projectName papio
 * @author yanshaowen
 * @date 2019/1/22 9:39
 */
const papio_1 = require("papio");
var Configuration = papio_1.annotation.Configuration;
var Bean = papio_1.annotation.Bean;
var TypeDataSource = papio_1.data.TypeDataSource;
var MapperScan = papio_1.annotation.MapperScan;
let MysqlCommonUtilConfiguration = class MysqlCommonUtilConfiguration {
    dataSourceMaster() {
        const typeDataSource = new TypeDataSource();
        typeDataSource.setName("mysql-master");
        typeDataSource.setUrl("mysql://127.0.0.1:3306/common_util?logging=true");
        typeDataSource.setUsername("common_util_root");
        typeDataSource.setPassword("123456");
        typeDataSource.setEntities(["src/model/dto/common-util/*.ts"]);
        typeDataSource.build();
        return typeDataSource;
    }
    dataSourceSlave1() {
        const typeDataSource = new TypeDataSource();
        typeDataSource.setName("mysql-slave1");
        typeDataSource.setReadOnly(true);
        typeDataSource.setUrl("mysql://127.0.0.1:3306/common_util?logging=true");
        typeDataSource.setUsername("common_util_slave1");
        typeDataSource.setPassword("123456");
        typeDataSource.setEntities(["src/model/dto/common-util/*.ts"]);
        typeDataSource.build();
        return typeDataSource;
    }
    dataSourceSlave2() {
        const typeDataSource = new TypeDataSource();
        typeDataSource.setName("mysql-slave2");
        typeDataSource.setReadOnly(true);
        typeDataSource.setUrl("mysql://127.0.0.1:3306/common_util?logging=true");
        typeDataSource.setUsername("common_util_slave2");
        typeDataSource.setPassword("123456");
        typeDataSource.setEntities(["src/model/dto/common-util/*.ts"]);
        typeDataSource.build();
        return typeDataSource;
    }
};
__decorate([
    Bean,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], MysqlCommonUtilConfiguration.prototype, "dataSourceMaster", null);
__decorate([
    Bean,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], MysqlCommonUtilConfiguration.prototype, "dataSourceSlave1", null);
__decorate([
    Bean,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], MysqlCommonUtilConfiguration.prototype, "dataSourceSlave2", null);
MysqlCommonUtilConfiguration = __decorate([
    Configuration,
    MapperScan("@dao/common-util")
], MysqlCommonUtilConfiguration);
exports.MysqlCommonUtilConfiguration = MysqlCommonUtilConfiguration;
