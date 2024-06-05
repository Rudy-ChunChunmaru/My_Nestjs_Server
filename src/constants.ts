let prot = '3003';
let ip = 'localhost';
if (process.env.PORT) prot = process.env.PORT;
if (process.env.IP) ip = process.env.IP;

export const appConstants = {
  port: prot,
  ip: ip,
};
