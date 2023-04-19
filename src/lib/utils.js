import fs from 'fs';
import path from 'path';

export function getCompaniesData() {
  const filePath = path.join(process.cwd(), 'companies.json');
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const companiesData = JSON.parse(fileContent);
  return companiesData;
}
