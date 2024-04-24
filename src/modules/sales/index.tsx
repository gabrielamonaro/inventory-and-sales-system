import Sidebar from "../../Components/Sidebar";
import ButtonsGroup from "../../Components/buttonsGroup";
import StatBar from "../../Components/stat/table";
import MainTable from "../../Components/table";
import { IOrder } from "../../interfaces/IOrder";

const SalesPage: React.FC = () => {
  const headers = [
    { name: "Data", code: "date" },
    { name: "Produto", code: "product" },
    { name: "Quantidade", isNumeric: true, code: "quantity" },
    { name: "Valor de venda unitário", isNumeric: true, code: "unitPrice" },
    { name: "Valor de venda total", isNumeric: true, code: "totalPrice" },
    { name: "Cliente", code: "customer" },
    { name: "A pagar", code: "paid" },
  ];

  const data: IOrder[] = [
    {
      date: "24-04-2024",
      product: "T-Shirt",
      quantity: 5,
      unitPrice: 20.0,
      totalPrice: 100.0,
      customer: "Creuza",
      paid: true,
      id: "1",
    },
    {
      date: "24-04-2024",
      product: "T-Shirt",
      quantity: 5,
      unitPrice: 20.0,
      totalPrice: 100.0,
      customer: "Creuza",
      paid: true,
      id: "2",
    },
    {
      date: "24-04-2024",
      product: "T-Shirt",
      quantity: 5,
      unitPrice: 20.0,
      totalPrice: 100.0,
      customer: "Creuza",
      paid: true,
      id: "3",
    },
    {
      date: "24-04-2024",
      product: "T-Shirt",
      quantity: 5,
      unitPrice: 20.0,
      totalPrice: 100.0,
      customer: "Creuza",
      paid: true,
      id: "4",
    },
    {
      date: "24-04-2024",
      product: "T-Shirt",
      quantity: 5,
      unitPrice: 20.0,
      totalPrice: 100.0,
      customer: "Creuza",
      paid: true,
      id: "5",
    },
    {
      date: "24-04-2024",
      product: "T-Shirt",
      quantity: 5,
      unitPrice: 20.0,
      totalPrice: 100.0,
      customer: "Creuza",
      paid: true,
      id: "6",
    },
    {
      date: "24-04-2024",
      product: "T-Shirt",
      quantity: 5,
      unitPrice: 20.0,
      totalPrice: 100.0,
      customer: "Creuza",
      paid: true,
      id: "7",
    },
    {
      date: "24-04-2024",
      product: "T-Shirt",
      quantity: 5,
      unitPrice: 20.0,
      totalPrice: 100.0,
      customer: "Creuza",
      paid: true,
      id: "8",
    },
    {
      date: "24-04-2024",
      product: "T-Shirt",
      quantity: 5,
      unitPrice: 20.0,
      totalPrice: 100.0,
      customer: "Creuza",
      paid: true,
      id: "9",
    },
    {
      date: "24-04-2024",
      product: "T-Shirt",
      quantity: 5,
      unitPrice: 20.0,
      totalPrice: 100.0,
      customer: "Creuza",
      paid: true,
      id: "10",
    },
    {
      date: "24-04-2024",
      product: "T-Shirt",
      quantity: 5,
      unitPrice: 20.0,
      totalPrice: 100.0,
      customer: "Creuza",
      paid: true,
      id: "11",
    },
    {
      date: "24-04-2024",
      product: "T-Shirt",
      quantity: 5,
      unitPrice: 20.0,
      totalPrice: 100.0,
      customer: "Creuza",
      paid: true,
      id: "12",
    },
    {
      date: "24-04-2024",
      product: "T-Shirt",
      quantity: 5,
      unitPrice: 20.0,
      totalPrice: 100.0,
      customer: "Creuza",
      paid: true,
      id: "13",
    },
    {
      date: "24-04-2024",
      product: "T-Shirt",
      quantity: 5,
      unitPrice: 20.0,
      totalPrice: 100.0,
      customer: "Creuza",
      paid: true,
      id: "14",
    },
    {
      date: "24-04-2024",
      product: "T-Shirt",
      quantity: 5,
      unitPrice: 20.0,
      totalPrice: 100.0,
      customer: "Creuza",
      paid: true,
      id: "15",
    },
  ];
  return (
    <>
      <Sidebar selected="sales" />;
      <StatBar />
      <MainTable headers={headers} data={data} />
      <ButtonsGroup />
    </>
  );
};

export default SalesPage;
