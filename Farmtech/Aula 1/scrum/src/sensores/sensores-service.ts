import { Injectable } from "@nestjs/common";
import { Sensores } from "./sensores";

@Injectable()

export  class SensoresService {
    
    
    private sensores: Sensores[] = [];


    constructor(){
        let c1: Sensores = new Sensores();
        c1.nome = "Sensor Lago";
        c1.localizaçao = "12m, 20m";
        c1.tipo = "Sensor de Pressão";
        c1.dataInstalaçao = "07/03/2024";
        this.sensores.push(c1)

        let c2: Sensores = new Sensores();
        c2.nome = "Sensor Irrigação";
        c2.localizaçao = "-25m, 50m";
        c2.tipo = "Sensor de Vazão";
        c2.dataInstalaçao = "08/03/2024";
        this.sensores.push(c2)

        let c3: Sensores = new Sensores();
        c3.nome = "Sensor Plantação";
        c3.localizaçao = "-25m, 45m";
        c3.tipo = "Sensor de Temperatura";
        c3.dataInstalaçao = "08/03/2024";
        this.sensores.push(c3)
    }

    salvar(sensor:Sensores){
        this.sensores.push(sensor)
    }

    listarSensores(): Sensores[]{
        
        return this.sensores;
    }
}