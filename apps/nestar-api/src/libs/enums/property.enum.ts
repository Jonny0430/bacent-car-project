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
	SKODA = 'SKODA', // Sedan
	WALLPAPER = 'WALLPAPER', // SUV (Sport Utility Vehicle)
	BMW = 'BMW', // Aylanadigan tomli mashina
	MUSTANG = 'MUSTANG',
	SPORTS = 'SPORTS',
	MERCEDES = 'MERCEDES',
	OTHER = 'OTHER',
}
registerEnumType(PropertyType, {
	name: 'PropertyType',
});

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
