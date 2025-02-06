import { getAssetPath } from "@/core/helpers/assets";

interface ICustomer {
  id: number;
  nombre: string;
  email: string;
  idcuenta:string;
  estado: string;
  date: string;
}

const customers: Array<ICustomer> = [
  {
    id: Math.floor(Math.random() * 99999) + 1,
    nombre: "Emma Smith",
    email: "e.smith@kpmg.com.au",
    idcuenta:"akosmndi",
    estado: "Activo",
    date: "14 Dec 2020, 8:43 pm",
  },
  {
    id: Math.floor(Math.random() * 99999) + 1,
    nombre: "Melody Macy",
    email: "melody@altbox.com",
    idcuenta:"lasdkas232",
    estado: "Activo",
    date: "01 Dec 2020, 10:12 am",
  },
  
];

export type { ICustomer };

export default customers;
