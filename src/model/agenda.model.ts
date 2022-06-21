import {AbstractEntity} from "./abstract-entity.model";
import {StatusAgenda} from "./status-agenda.model";
import {Paciente} from "./paciente.model";
import {Medico} from "./medico.model";
import {Secretaria} from "./secretaria.model";

export class Agenda extends AbstractEntity {
    statusAgenda! : StatusAgenda
    dataDe! : Date
    dataAte! : Date
    encaixe! : Boolean
    paciente! : Paciente
    medico! : Medico
    secretaria! : Secretaria
}