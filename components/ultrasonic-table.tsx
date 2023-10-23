import { Table } from "@mantine/core";

export default function UlraSonicTableComponent({ data }: any) {
  const rows = data.map((item: any, index: any) => (
    <tr key={index}>
      <td style={{ textAlign: "center" }}>{item.id}</td>
      <td style={{ textAlign: "center" }}>{item.distance}</td>
      <td style={{ textAlign: "center" }}>{item.detected_at}</td>
    </tr>
  ));

  return (
    <Table>
      <thead>
        <tr>
          <th style={{ textAlign: "center" }}>ID</th>
          <th style={{ textAlign: "center" }}>Distance</th>
          <th style={{ textAlign: "center" }}>Detected At</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
}
