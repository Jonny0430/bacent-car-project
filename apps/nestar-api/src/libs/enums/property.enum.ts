import { registerEnumType } from '@nestjs/graphql';

// export enum PropertyType {
// 	APARTMENT = 'APARTMENT',
// 	VILLA = 'VILLA',
// 	HOUSE = 'HOUSE',
// }
// registerEnumType(PropertyType, {
// 	name: 'PropertyType',
// });

export enum PropertyType {
	SEDAN = 'SEDAN', // Sedan
	SUV = 'SUV', // SUV (Sport Utility Vehicle)
	COUPE = 'KUPÉ', // Kupe
	CONVERTIBLE = 'AYLANUVCHAN', // Aylanadigan tomli mashina
	HATCHBACK = 'HATCHBEK', // Hatchbek
	TRUCK = 'YUKAVTO', // Yuk avtomobili
	VAN = 'MINIVAN', // Minivan
}

export enum PropertyStatus {
	ACTIVE = 'ACTIVE',
	SOLD = 'SOLD',
	DELETE = 'DELETE',
}
registerEnumType(PropertyStatus, {
	name: 'PropertyStatus',
});

export enum PropertyLocation {
	SEOUL = 'SEOUL',
	BUSAN = 'BUSAN',
	INCHEON = 'INCHEON',
	DAEGU = 'DAEGU',
	GYEONGJU = 'GYEONGJU',
	GWANGJU = 'GWANGJU',
	CHONJU = 'CHONJU',
	DAEJON = 'DAEJON',
	JEJU = 'JEJU',
}
registerEnumType(PropertyLocation, {
	name: 'PropertyLocation',
});
