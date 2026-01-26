// This file contains the data for all conversion categories and units
// In a real application, this would likely come from a database

export type Unit = {
  id: string
  name: string
  symbol?: string
  about?: string
  ratio: number // Ratio relative to the base unit of the category
  isInverse?: boolean // For units like L/100km where lower is better/higher
}

export type Category = {
  slug: string
  name: string
  description?: string
  detailedDescription?: string
  units: Unit[]
}

const categories: Category[] = [
  {
    slug: "weight",
    name: "Weight",
    description: "Convert between different weight and mass units like kilograms, pounds, grams, ounces, and more.",
    detailedDescription: `
      Weight is a measure of the force of gravity acting on an object. Mass is a measure of the amount of matter in an object.
      
      The kilogram (kg) is the SI base unit of mass. Other common units include grams (g), pounds (lb), and ounces (oz).
      
      Weight conversion is essential in many fields including science, medicine, cooking, shipping, and international trade.
      The metric system (using kilograms and grams) is used in most countries, while the imperial system (using pounds and ounces) 
      is primarily used in the United States and a few other countries.
    `,
    units: [
      {
        id: "kilogram",
        name: "Kilogram",
        symbol: "kg",
        ratio: 1000,
        about:
          "The kilogram is the SI base unit of mass, defined by the International Prototype of the Kilogram until 2019, and now defined in terms of fundamental physical constants.",
      },
      {
        id: "gram",
        name: "Gram",
        symbol: "g",
        ratio: 1,
        about:
          "A gram is a metric unit of mass equal to one thousandth (1/1000) of a kilogram. It's commonly used for measuring small masses.",
      },
      {
        id: "milligram",
        name: "Milligram",
        symbol: "mg",
        ratio: 0.001,
        about:
          "A milligram is a unit of mass equal to one thousandth (1/1000) of a gram or one millionth (1/1,000,000) of a kilogram.",
      },
      {
        id: "pound",
        name: "Pound",
        symbol: "lb",
        ratio: 453.59237,
        about:
          "The pound is an imperial and US customary unit of weight. One pound is equal to 16 ounces or 0.45359237 kilograms.",
      },
      {
        id: "ounce",
        name: "Ounce",
        symbol: "oz",
        ratio: 28.349523125,
        about:
          "The ounce is a unit of mass used in most British derived customary systems of measurement. One ounce is equal to approximately 28.35 grams.",
      },
      {
        id: "stone",
        name: "Stone",
        symbol: "st",
        ratio: 6350.29318,
        about:
          "The stone is a unit of mass used in the imperial system, primarily in the UK and Ireland. One stone is equal to 14 pounds or approximately 6.35 kilograms.",
      },
      {
        id: "ton",
        name: "Metric Ton",
        symbol: "t",
        ratio: 1000000,
        about: "A metric ton (or tonne) is a unit of mass equal to 1,000 kilograms or approximately 2,204.6 pounds.",
      },
      {
        id: "us-ton",
        name: "US Ton",
        symbol: "ton",
        ratio: 907184.74,
        about: "The US ton, also known as the short ton, is equal to 2,000 pounds or approximately 907.18 kilograms.",
      },
      {
        id: "uk-ton",
        name: "UK Ton",
        symbol: "ton",
        ratio: 1016046.9088,
        about: "The UK ton, also known as the long ton, is equal to 2,240 pounds or approximately 1,016.05 kilograms.",
      },
    ],
  },
  {
    slug: "length",
    name: "Length",
    description: "Convert between different length and distance units like meters, feet, kilometers, miles, and more.",
    detailedDescription: `
      Length is a measure of distance. The meter (m) is the SI base unit of length, defined as the distance traveled by light in a vacuum in 1/299,792,458 of a second.
      
      Length conversion is used in various fields including construction, engineering, navigation, and everyday measurements.
      
      The metric system (using meters, centimeters, and kilometers) is used in most countries, while the imperial system (using feet, inches, and miles) 
      is primarily used in the United States and a few other countries.
      
      Accurate length conversion is crucial for international projects, scientific research, and global trade.
    `,
    units: [
      {
        id: "meter",
        name: "Meter",
        symbol: "m",
        ratio: 1,
        about:
          "The meter is the SI base unit of length. It was originally defined as one ten-millionth of the distance from the equator to the North Pole, but is now defined by the distance light travels in a vacuum in a specific fraction of a second.",
      },
      {
        id: "kilometer",
        name: "Kilometer",
        symbol: "km",
        ratio: 1000,
        about:
          "A kilometer is a unit of length equal to 1,000 meters. It's commonly used for measuring distances between geographical places.",
      },
      {
        id: "centimeter",
        name: "Centimeter",
        symbol: "cm",
        ratio: 0.01,
        about:
          "A centimeter is a unit of length equal to one hundredth (1/100) of a meter. It's commonly used for everyday measurements.",
      },
      {
        id: "millimeter",
        name: "Millimeter",
        symbol: "mm",
        ratio: 0.001,
        about:
          "A millimeter is a unit of length equal to one thousandth (1/1000) of a meter. It's commonly used in engineering and manufacturing.",
      },
      {
        id: "micrometer",
        name: "Micrometer",
        symbol: "μm",
        ratio: 1e-6,
        about:
          "A micrometer is a unit of length equal to one millionth (1/1,000,000) of a meter. It's commonly used in science and technology.",
      },
      {
        id: "nanometer",
        name: "Nanometer",
        symbol: "nm",
        ratio: 1e-9,
        about:
          "A nanometer is a unit of length equal to one billionth (1/1,000,000,000) of a meter. It's used for measuring wavelengths of light and atomic-scale objects.",
      },
      {
        id: "mile",
        name: "Mile",
        symbol: "mi",
        ratio: 1609.344,
        about:
          "The mile is an imperial and US customary unit of length. One mile is equal to 5,280 feet, 1,760 yards, or approximately 1.609 kilometers.",
      },
      {
        id: "yard",
        name: "Yard",
        symbol: "yd",
        ratio: 0.9144,
        about:
          "The yard is an imperial and US customary unit of length. One yard is equal to 3 feet, 36 inches, or approximately 0.9144 meters.",
      },
      {
        id: "foot",
        name: "Foot",
        symbol: "ft",
        ratio: 0.3048,
        about:
          "The foot is an imperial and US customary unit of length. One foot is equal to 12 inches or approximately 0.3048 meters.",
      },
      {
        id: "inch",
        name: "Inch",
        symbol: "in",
        ratio: 0.0254,
        about:
          "The inch is an imperial and US customary unit of length. One inch is equal to 1/12 of a foot or approximately 2.54 centimeters.",
      },
      {
        id: "nautical-mile",
        name: "Nautical Mile",
        symbol: "nmi",
        ratio: 1852,
        about:
          "The nautical mile is a unit of length used in marine navigation and aviation. One nautical mile is equal to 1,852 meters or approximately 1.151 miles.",
      },
    ],
  },
  {
    slug: "temperature",
    name: "Temperature",
    description: "Convert between different temperature units like Celsius, Fahrenheit, and Kelvin.",
    detailedDescription: `
      Temperature is a physical quantity that expresses hot and cold. It is measured with a thermometer calibrated in one or more temperature scales.
      
      The Kelvin (K) is the SI base unit of temperature. Other common units include Celsius (°C) and Fahrenheit (°F).
      
      The Celsius scale is used in most countries for everyday temperature measurement, while the Fahrenheit scale is primarily used in the United States.
      The Kelvin scale is used in scientific contexts, with 0 K representing absolute zero, the theoretical absence of all thermal energy.
      
      Temperature conversion is essential in weather forecasting, cooking, scientific research, and many industrial processes.
    `,
    units: [
      {
        id: "celsius",
        name: "Celsius",
        symbol: "°C",
        ratio: 1,
        about:
          "The Celsius scale is a temperature scale used by the International System of Units (SI). It was previously known as the centigrade scale. 0°C is the freezing point of water and 100°C is the boiling point of water at standard atmospheric pressure.",
      },
      {
        id: "fahrenheit",
        name: "Fahrenheit",
        symbol: "°F",
        ratio: 1,
        about:
          "The Fahrenheit scale is a temperature scale based on one proposed in 1724 by the physicist Daniel Gabriel Fahrenheit. On this scale, the freezing point of water is 32°F and the boiling point is 212°F at standard atmospheric pressure.",
      },
      {
        id: "kelvin",
        name: "Kelvin",
        symbol: "K",
        ratio: 1,
        about:
          "The Kelvin is the SI base unit of temperature. It is defined by setting the fixed numerical value of the Boltzmann constant to 1.380649×10^−23 J/K. The Kelvin scale is an absolute thermodynamic temperature scale, with 0 K representing absolute zero.",
      },
    ],
  },
  {
    slug: "volume",
    name: "Volume",
    description: "Convert between different volume units like liters, gallons, cubic meters, and more.",
    detailedDescription: `
      Volume is the quantity of three-dimensional space enclosed by a closed surface. It quantifies the space that a substance or object occupies.
      
      The cubic meter (m³) is the SI derived unit of volume. Other common units include liters (L), gallons (gal), and cubic feet (ft³).
      
      Volume conversion is used in cooking, chemistry, engineering, and many other fields. Different regions use different volume units,
      with the metric system (using liters and milliliters) being used in most countries, while the imperial system (using gallons, quarts, and fluid ounces)
      is primarily used in the United States.
      
      Accurate volume conversion is crucial for international recipes, scientific experiments, and global trade of liquids.
    `,
    units: [
      {
        id: "liter",
        name: "Liter",
        symbol: "L",
        ratio: 1,
        about:
          "The liter is a metric unit of volume equal to 1 cubic decimeter (dm³), 1,000 cubic centimeters (cm³), or 1/1,000 cubic meters (m³).",
      },
      {
        id: "milliliter",
        name: "Milliliter",
        symbol: "mL",
        ratio: 0.001,
        about:
          "A milliliter is a unit of volume equal to one thousandth (1/1000) of a liter. It is equivalent to 1 cubic centimeter (cm³).",
      },
      {
        id: "cubic-meter",
        name: "Cubic Meter",
        symbol: "m³",
        ratio: 1000,
        about:
          "The cubic meter is the SI derived unit of volume. It is the volume of a cube with edges one meter in length.",
      },
      {
        id: "cubic-centimeter",
        name: "Cubic Centimeter",
        symbol: "cm³",
        ratio: 0.001,
        about:
          "A cubic centimeter is a unit of volume equal to one milliliter. It is the volume of a cube with edges one centimeter in length.",
      },
      {
        id: "gallon",
        name: "US Gallon",
        symbol: "gal",
        ratio: 3.785411784,
        about:
          "The US gallon is a unit of volume equal to 231 cubic inches, or approximately 3.785 liters. It is commonly used in the United States for measuring liquid volumes.",
      },
      {
        id: "quart",
        name: "US Quart",
        symbol: "qt",
        ratio: 0.946352946,
        about:
          "The US quart is a unit of volume equal to 1/4 of a US gallon, 2 US pints, or approximately 0.946 liters.",
      },
      {
        id: "pint",
        name: "US Pint",
        symbol: "pt",
        ratio: 0.473176473,
        about: "The US pint is a unit of volume equal to 1/8 of a US gallon, 2 US cups, or approximately 0.473 liters.",
      },
      {
        id: "cup",
        name: "US Cup",
        symbol: "cup",
        ratio: 0.2365882365,
        about:
          "The US cup is a unit of volume equal to 1/16 of a US gallon, 8 US fluid ounces, or approximately 236.6 milliliters.",
      },
      {
        id: "fluid-ounce",
        name: "US Fluid Ounce",
        symbol: "fl oz",
        ratio: 0.0295735296,
        about:
          "The US fluid ounce is a unit of volume equal to 1/128 of a US gallon, 1/16 of a US pint, or approximately 29.57 milliliters.",
      },
      {
        id: "tablespoon",
        name: "Tablespoon",
        symbol: "tbsp",
        ratio: 0.0147867648,
        about:
          "A tablespoon is a unit of volume equal to 3 teaspoons, 1/2 US fluid ounce, or approximately 14.79 milliliters.",
      },
      {
        id: "teaspoon",
        name: "Teaspoon",
        symbol: "tsp",
        ratio: 0.0049289216,
        about:
          "A teaspoon is a unit of volume equal to 1/3 tablespoon, 1/6 US fluid ounce, or approximately 4.93 milliliters.",
      },
      {
        id: "imperial-gallon",
        name: "Imperial Gallon",
        symbol: "gal",
        ratio: 4.54609,
        about:
          "The imperial gallon is a unit of volume equal to 4.54609 liters. It is used in the United Kingdom, Canada, and some Caribbean nations.",
      },
    ],
  },
  {
    slug: "area",
    name: "Area",
    description: "Convert between different area units like square meters, square feet, acres, hectares, and more.",
    detailedDescription: `
      Area is the quantity that expresses the extent of a two-dimensional region, shape, or planar lamina, in the plane.
      
      The square meter (m²) is the SI derived unit of area. Other common units include square feet (ft²), acres, and hectares (ha).
      
      Area conversion is used in real estate, agriculture, construction, and many other fields. Different regions use different area units,
      with the metric system (using square meters and hectares) being used in most countries, while the imperial system (using square feet and acres)
      is primarily used in the United States.
      
      Accurate area conversion is crucial for international property transactions, land management, and global agriculture.
    `,
    units: [
      {
        id: "square-meter",
        name: "Square Meter",
        symbol: "m²",
        ratio: 1,
        about:
          "The square meter is the SI derived unit of area. It is the area of a square with sides one meter in length.",
      },
      {
        id: "square-kilometer",
        name: "Square Kilometer",
        symbol: "km²",
        ratio: 1e6,
        about:
          "A square kilometer is a unit of area equal to 1,000,000 square meters. It is commonly used for measuring large land areas.",
      },
      {
        id: "square-centimeter",
        name: "Square Centimeter",
        symbol: "cm²",
        ratio: 0.0001,
        about:
          "A square centimeter is a unit of area equal to 1/10000 of a square meter. It is the area of a square with sides one centimeter in length.",
      },
      {
        id: "square-millimeter",
        name: "Square Millimeter",
        symbol: "mm²",
        ratio: 1e-6,
        about:
          "A square millimeter is a unit of area equal to 1/1000000 of a square meter. It is the area of a square with sides one millimeter in length.",
      },
      {
        id: "square-mile",
        name: "Square Mile",
        symbol: "mi²",
        ratio: 2589988.11,
        about:
          "A square mile is a unit of area equal to the area of a square with sides one mile in length. It is equal to 640 acres or approximately 2.59 square kilometers.",
      },
      {
        id: "square-yard",
        name: "Square Yard",
        symbol: "yd²",
        ratio: 0.83612736,
        about:
          "A square yard is a unit of area equal to the area of a square with sides one yard in length. It is equal to 9 square feet or approximately 0.836 square meters.",
      },
      {
        id: "square-foot",
        name: "Square Foot",
        symbol: "ft²",
        ratio: 0.09290304,
        about:
          "A square foot is a unit of area equal to the area of a square with sides one foot in length. It is equal to 144 square inches or approximately 0.0929 square meters.",
      },
      {
        id: "square-inch",
        name: "Square Inch",
        symbol: "in²",
        ratio: 0.00064516,
        about:
          "A square inch is a unit of area equal to the area of a square with sides one inch in length. It is equal to 1/144 of a square foot or approximately 6.4516 square centimeters.",
      },
      {
        id: "acre",
        name: "Acre",
        symbol: "ac",
        ratio: 4046.8564224,
        about:
          "An acre is a unit of area equal to 43,560 square feet, 4,840 square yards, or approximately 4,047 square meters. It is commonly used in the United States and the United Kingdom for measuring land area.",
      },
      {
        id: "hectare",
        name: "Hectare",
        symbol: "ha",
        ratio: 10000,
        about:
          "A hectare is a unit of area equal to 10,000 square meters or approximately 2.471 acres. It is commonly used in most countries for measuring land area.",
      },
    ],
  },
  // Other categories remain the same but would also be enhanced with detailed descriptions
  {
    slug: "speed",
    name: "Speed",
    description:
      "Convert between different speed units like kilometers per hour, miles per hour, meters per second, and more.",
    detailedDescription: `
      Speed is the rate of change of an object's position with respect to time. It is a scalar quantity with magnitude but no direction.
      
      The meter per second (m/s) is the SI derived unit of speed. Other common units include kilometers per hour (km/h), miles per hour (mph), and knots (kn).
      
      Speed conversion is used in transportation, physics, engineering, and many other fields. Different regions use different speed units,
      with kilometers per hour being used in most countries, while miles per hour is primarily used in the United States and the United Kingdom.
      
      Knots are commonly used in maritime navigation and aviation.
    `,
    units: [
      {
        id: "meter-per-second",
        name: "Meter per Second",
        symbol: "m/s",
        ratio: 1,
        about:
          "The meter per second is the SI derived unit of speed. It is the speed of an object traveling one meter in one second.",
      },
      {
        id: "kilometer-per-hour",
        name: "Kilometer per Hour",
        symbol: "km/h",
        ratio: 0.277777778,
        about:
          "A kilometer per hour is a unit of speed equal to one kilometer traveled in one hour. It is commonly used for measuring vehicle speeds in most countries.",
      },
      {
        id: "mile-per-hour",
        name: "Mile per Hour",
        symbol: "mph",
        ratio: 0.44704,
        about:
          "A mile per hour is a unit of speed equal to one mile traveled in one hour. It is commonly used for measuring vehicle speeds in the United States and the United Kingdom.",
      },
      {
        id: "foot-per-second",
        name: "Foot per Second",
        symbol: "ft/s",
        ratio: 0.3048,
        about:
          "A foot per second is a unit of speed equal to one foot traveled in one second. It is commonly used in engineering in the United States.",
      },
      {
        id: "knot",
        name: "Knot",
        symbol: "kn",
        ratio: 0.514444444,
        about:
          "A knot is a unit of speed equal to one nautical mile per hour. It is commonly used in maritime navigation and aviation.",
      },
    ],
  },
  {
    slug: "time",
    name: "Time",
    description: "Convert between different time units like seconds, minutes, hours, days, weeks, and more.",
    detailedDescription: `
      Time is the indefinite continued progress of existence and events that occur in an apparently irreversible succession from the past, through the present, to the future.
      
      The second (s) is the SI base unit of time. Other common units include minutes (min), hours (h), days (d), and years (yr).
      
      Time conversion is used in everyday life, science, computing, and many other fields. The standardized units of time are used globally,
      though different cultures may have different calendars and ways of measuring longer periods of time.
      
      Accurate time conversion is crucial for scheduling, scientific experiments, and global coordination.
    `,
    units: [
      {
        id: "second",
        name: "Second",
        symbol: "s",
        ratio: 1,
        about: "The second is the SI base unit of time. It is defined by taking the fixed numerical value of the cesium frequency, the unperturbed ground-state hyperfine transition frequency of the cesium-133 atom."
      },
      {
        id: "millisecond",
        name: "Millisecond",
        symbol: "ms",
        ratio: 0.001,
        about: "A millisecond is a unit of time equal to one thousandth (1/1000) of a second. It is commonly used in computing and electronics."
      },
      {
        id: "microsecond",
        name: "Microsecond",
        symbol: "μs",
        ratio: 0.000001,
        about: "A microsecond is a unit of time equal to one millionth (1/1,000,000) of a second. It is commonly used in computing, telecommunications, and scientific research."
      },
      {
        id: "nanosecond",
        name: "Nanosecond",
        symbol: "ns",
        ratio: 1e-9,
        about: "A nanosecond is a unit of time equal to one billionth (1/1,000,000,000) of a second. It is commonly used in electronics, light-based distance measurements, and computing."
      },
      {
        id: "minute",
        name: "Minute",
        symbol: "min",
        ratio: 60,
        about: "A minute is a unit of time equal to 60 seconds. It is a standard unit of time used worldwide."
      },
      {
        id: "hour",
        name: "Hour",
        symbol: "h",
        ratio: 3600,
        about: "An hour is a unit of time equal to 60 minutes or 3,600 seconds. It is a standard unit of time used worldwide."
      },
      {
        id: "day",
        name: "Day",
        symbol: "d",
        ratio: 86400,
        about: "A day is a unit of time equal to 24 hours, 1,440 minutes, or 86,400 seconds. It approximates the period of one rotation of Earth with respect to the Sun."
      },
      {
        id: "week",
        name: "Week",
        symbol: "wk",
        ratio: 604800,
        about: "A week is a unit of time equal to 7 days, 168 hours, or 604,800 seconds. It is a standard time unit used in many calendar systems."
      },
      {
        id: "month",
        name: "Month",
        symbol: "mo",
        ratio: 2628002.88,
        about: "A month is a unit of time used with calendars, approximating the time it takes for the Moon to go through a complete cycle of phases. In the Gregorian calendar, a month has 28 to 31 days."
      },
      {
        id: "year",
        name: "Year",
        symbol: "yr",
        ratio: 31536000,
        about: "A year is the orbital period of Earth moving around the Sun. In the Gregorian calendar, a common year has 365 days and a leap year 366 days."
      },
      {
        id: "decade",
        name: "Decade",
        symbol: "dec",
        ratio: 315360000,
        about: "A decade is a period of 10 years. It is commonly used to refer to a distinctive period in history or culture."
      },
      {
        id: "century",
        name: "Century",
        symbol: "cent",
        ratio: 3153600000,
        about: "A century is a period of 100 years. Centuries are numbered ordinally in English and many other languages."
      },
    ],
  },
  {
    slug: "digital",
    name: "Digital Storage",
    description: "Convert between different digital storage units like bytes, kilobytes, megabytes, gigabytes, and more.",
    detailedDescription: `
      Digital storage refers to the capacity to store digital data. It is measured in bits, bytes, and their multiples.
      
      The bit is the basic unit of information in computing and digital communications. The byte (8 bits) is the smallest addressable unit of memory in most computer architectures.
      
      Digital storage conversion is essential in computing, telecommunications, and data management. Different prefixes indicate multiples of these units:
      kilo (10³ or 2¹⁰), mega (10⁶ or 2²⁰), giga (10⁹ or 2³⁰), tera (10¹² or 2⁴⁰), peta (10¹⁵ or 2⁵⁰), and so on.
      
      There can be confusion between decimal (powers of 10) and binary (powers of 2) interpretations of these prefixes, leading to discrepancies in reported storage capacities.
    `,
    units: [
      {
        id: "bit",
        name: "Bit",
        symbol: "b",
        ratio: 1,
        about: "A bit is the basic unit of information in computing and digital communications. It can have only one of two values, usually denoted as 0 and 1."
      },
      {
        id: "byte",
        name: "Byte",
        symbol: "B",
        ratio: 8,
        about: "A byte is a unit of digital information that consists of 8 bits. It is the smallest addressable unit of memory in most computer architectures."
      },
      {
        id: "kilobit",
        name: "Kilobit",
        symbol: "Kb",
        ratio: 1000,
        about: "A kilobit is a unit of digital information equal to 1,000 bits or 10³ bits. In some contexts, it may refer to 1,024 bits (2¹⁰ bits)."
      },
      {
        id: "kilobyte",
        name: "Kilobyte",
        symbol: "KB",
        ratio: 8000,
        about: "A kilobyte is a unit of digital information equal to 1,000 bytes or 10³ bytes. In some contexts, it may refer to 1,024 bytes (2¹⁰ bytes)."
      },
      {
        id: "megabit",
        name: "Megabit",
        symbol: "Mb",
        ratio: 1e6,
        about: "A megabit is a unit of digital information equal to 1,000,000 bits or 10⁶ bits. In some contexts, it may refer to 1,048,576 bits (2²⁰ bits)."
      },
      {
        id: "megabyte",
        name: "Megabyte",
        symbol: "MB",
        ratio: 8e6,
        about: "A megabyte is a unit of digital information equal to 1,000,000 bytes or 10⁶ bytes. In some contexts, it may refer to 1,048,576 bytes (2²⁰ bytes)."
      },
      {
        id: "gigabit",
        name: "Gigabit",
        symbol: "Gb",
        ratio: 1e9,
        about: "A gigabit is a unit of digital information equal to 1,000,000,000 bits or 10⁹ bits. In some contexts, it may refer to 1,073,741,824 bits (2³⁰ bits)."
      },
      {
        id: "gigabyte",
        name: "Gigabyte",
        symbol: "GB",
        ratio: 8e9,
        about: "A gigabyte is a unit of digital information equal to 1,000,000,000 bytes or 10⁹ bytes. In some contexts, it may refer to 1,073,741,824 bytes (2³⁰ bytes)."
      },
      {
        id: "terabit",
        name: "Terabit",
        symbol: "Tb",
        ratio: 1e12,
        about: "A terabit is a unit of digital information equal to 1,000,000,000,000 bits or 10¹² bits. In some contexts, it may refer to 1,099,511,627,776 bits (2⁴⁰ bits)."
      },
      {
        id: "terabyte",
        name: "Terabyte",
        symbol: "TB",
        ratio: 8e12,
        about: "A terabyte is a unit of digital information equal to 1,000,000,000,000 bytes or 10¹² bytes. In some contexts, it may refer to 1,099,511,627,776 bytes (2⁴⁰ bytes)."
      },
      {
        id: "petabit",
        name: "Petabit",
        symbol: "Pb",
        ratio: 1e15,
        about: "A petabit is a unit of digital information equal to 1,000,000,000,000,000 bits or 10¹⁵ bits. In some contexts, it may refer to 1,125,899,906,842,624 bits (2⁵⁰ bits)."
      },
      {
        id: "petabyte",
        name: "Petabyte",
        symbol: "PB",
        ratio: 8e15,
        about: "A petabyte is a unit of digital information equal to 1,000,000,000,000,000 bytes or 10¹⁵ bytes. In some contexts, it may refer to 1,125,899,906,842,624 bytes (2⁵⁰ bytes)."
      },
    ],
  },
  {
    slug: "pressure",
    name: "Pressure",
    description: "Convert between different pressure units like pascals, bars, atmospheres, psi, and more.",
    detailedDescription: `
      Pressure is the force applied perpendicular to the surface of an object per unit area over which that force is distributed.
      
      The pascal (Pa) is the SI unit of pressure, defined as one newton per square meter. Other common units include bars, atmospheres (atm), pounds per square inch (psi), and millimeters of mercury (mmHg).
      
      Pressure conversion is essential in meteorology, engineering, diving, aviation, and many scientific fields. Different regions and industries often use different pressure units,
      making accurate conversion crucial for international collaboration and safety.
      
      Atmospheric pressure at sea level is approximately 101,325 Pa, 1.01325 bar, 1 atm, 14.7 psi, or 760 mmHg.
    `,
    units: [
      {
        id: "pascal",
        name: "Pascal",
        symbol: "Pa",
        ratio: 1,
        about: "The pascal is the SI unit of pressure, defined as one newton per square meter. It is named after the French mathematician and physicist Blaise Pascal."
      },
      {
        id: "kilopascal",
        name: "Kilopascal",
        symbol: "kPa",
        ratio: 1000,
        about: "A kilopascal is a unit of pressure equal to 1,000 pascals. It is commonly used in meteorology and engineering."
      },
      {
        id: "megapascal",
        name: "Megapascal",
        symbol: "MPa",
        ratio: 1e6,
        about: "A megapascal is a unit of pressure equal to 1,000,000 pascals. It is commonly used in engineering for high-pressure applications."
      },
      {
        id: "bar",
        name: "Bar",
        symbol: "bar",
        ratio: 100000,
        about: "A bar is a metric unit of pressure equal to 100,000 pascals or approximately 0.987 atmospheres. It is commonly used in meteorology and engineering."
      },
      {
        id: "millibar",
        name: "Millibar",
        symbol: "mbar",
        ratio: 100,
        about: "A millibar is a unit of pressure equal to 1/1000 of a bar or 100 pascals. It is commonly used in meteorology."
      },
      {
        id: "atmosphere",
        name: "Atmosphere",
        symbol: "atm",
        ratio: 101325,
        about: "An atmosphere is a unit of pressure equal to 101,325 pascals. It approximates the average atmospheric pressure at sea level on Earth."
      },
      {
        id: "psi",
        name: "Pound per Square Inch",
        symbol: "psi",
        ratio: 6894.757293,
        about: "Pound per square inch is a unit of pressure equal to the pressure resulting from a force of one pound-force applied to an area of one square inch. It equals approximately 6,895 pascals."
      },
      {
        id: "torr",
        name: "Torr",
        symbol: "Torr",
        ratio: 133.3223684,
        about: "A torr is a unit of pressure equal to 1/760 of an atmosphere or approximately 133.3 pascals. It is named after Evangelista Torricelli, an Italian physicist."
      },
      {
        id: "mmhg",
        name: "Millimeter of Mercury",
        symbol: "mmHg",
        ratio: 133.3223684,
        about: "A millimeter of mercury is a unit of pressure equal to the pressure exerted by a column of mercury 1 millimeter high. It equals approximately 133.3 pascals and is nearly identical to 1 torr."
      },
    ],
  },
  {
    slug: "energy",
    name: "Energy",
    description: "Convert between different energy units like joules, calories, kilowatt-hours, and more.",
    detailedDescription: `
      Energy is the capacity to do work or produce heat. It exists in various forms such as kinetic, potential, thermal, electrical, chemical, nuclear, and electromagnetic energy.
      
      The joule (J) is the SI unit of energy, defined as the energy transferred when applying a force of one newton through a distance of one meter. Other common units include calories (cal), kilowatt-hours (kWh), and British thermal units (BTU).
      
      Energy conversion is essential in physics, engineering, nutrition, and many other fields. Different energy units are often used in different contexts:
      joules and kilojoules in physics, calories and kilocalories in nutrition, kilowatt-hours for electricity consumption, and BTUs for heating and cooling systems.
      
      Accurate energy conversion is crucial for scientific research, engineering design, and energy management.
    `,
    units: [
      {
        id: "joule",
        name: "Joule",
        symbol: "J",
        ratio: 1,
        about: "The joule is the SI unit of energy, defined as the energy transferred when applying a force of one newton through a distance of one meter. It is named after the English physicist James Prescott Joule."
      },
      {
        id: "kilojoule",
        name: "Kilojoule",
        symbol: "kJ",
        ratio: 1000,
        about: "A kilojoule is a unit of energy equal to 1,000 joules. It is commonly used in physics, chemistry, and nutrition."
      },
      {
        id: "calorie",
        name: "Calorie",
        symbol: "cal",
        ratio: 4.184,
        about: "A calorie is a unit of energy equal to the amount of heat needed to raise the temperature of one gram of water by one degree Celsius. It equals approximately 4.184 joules."
      },
      {
        id: "kilocalorie",
        name: "Kilocalorie",
        symbol: "kcal",
        ratio: 4184,
        about: "A kilocalorie is a unit of energy equal to 1,000 calories or approximately 4,184 joules. It is commonly used in nutrition and is often referred to as a 'Calorie' (with a capital C)."
      },
      {
        id: "watt-hour",
        name: "Watt Hour",
        symbol: "Wh",
        ratio: 3600,
        about: "A watt-hour is a unit of energy equal to 3,600 joules. It represents the energy equivalent to a power of one watt sustained for one hour."
      },
      {
        id: "kilowatt-hour",
        name: "Kilowatt Hour",
        symbol: "kWh",
        ratio: 3600000,
        about: "A kilowatt-hour is a unit of energy equal to 3,600,000 joules. It is commonly used as a billing unit for energy delivered to consumers by electric utilities."
      },
      {
        id: "electronvolt",
        name: "Electronvolt",
        symbol: "eV",
        ratio: 1.602176634e-19,
        about: "An electronvolt is a unit of energy equal to approximately 1.602×10^-19 joules. It represents the amount of energy gained by a single electron accelerated through an electric potential difference of one volt."
      },
      {
        id: "british-thermal-unit",
        name: "British Thermal Unit",
        symbol: "BTU",
        ratio: 1055.056,
        about: "A British thermal unit is a unit of heat equal to approximately 1,055 joules. It is the amount of heat required to raise the temperature of one pound of water by one degree Fahrenheit."
      },
      {
        id: "foot-pound",
        name: "Foot-Pound",
        symbol: "ft⋅lb",
        ratio: 1.355818,
        about: "A foot-pound is a unit of energy equal to approximately 1.356 joules. It represents the work done by a force of one pound acting through a distance of one foot."
      },
    ],
  },
  {
    slug: "power",
    name: "Power",
    description: "Convert between different power units like watts, kilowatts, horsepower, and more.",
    detailedDescription: `
      Power is the rate at which work is done or energy is transferred. It is a scalar quantity with magnitude but no direction.
      
      The watt (W) is the SI unit of power, defined as one joule per second. Other common units include kilowatts (kW), megawatts (MW), and horsepower (hp).
      
      Power conversion is essential in engineering, physics, and many practical applications. Different power units are often used in different contexts:
      watts and kilowatts for electrical power, horsepower for engines and motors, and BTU per hour for heating and cooling systems.
      
      Accurate power conversion is crucial for designing electrical systems, engines, and energy production facilities.
    `,
    units: [
      {
        id: "watt",
        name: "Watt",
        symbol: "W",
        ratio: 1,
        about: "The watt is the SI unit of power, defined as one joule per second. It is named after the Scottish engineer James Watt, who improved the steam engine."
      },
      {
        id: "kilowatt",
        name: "Kilowatt",
        symbol: "kW",
        ratio: 1000,
        about: "A kilowatt is a unit of power equal to 1,000 watts. It is commonly used to express the power output of engines and the power consumption of electrical devices."
      },
      {
        id: "megawatt",
        name: "Megawatt",
        symbol: "MW",
        ratio: 1e6,
        about: "A megawatt is a unit of power equal to 1,000,000 watts. It is commonly used to express the power output of power plants and large industrial facilities."
      },
      {
        id: "horsepower",
        name: "Horsepower",
        symbol: "hp",
        ratio: 745.7,
        about: "Horsepower is a unit of power equal to approximately 745.7 watts. It was originally defined as the power a horse could sustain while working. It is commonly used to express the power output of engines and motors."
      },
      {
        id: "foot-pound-per-minute",
        name: "Foot-Pound per Minute",
        symbol: "ft⋅lb/min",
        ratio: 0.0225969,
        about: "A foot-pound per minute is a unit of power equal to approximately 0.0226 watts. It represents the work done at the rate of one foot-pound per minute."
      },
      {
        id: "btu-per-hour",
        name: "BTU per Hour",
        symbol: "BTU/h",
        ratio: 0.293071,
        about: "A BTU per hour is a unit of power equal to approximately 0.293 watts. It is commonly used in heating, ventilation, and air conditioning (HVAC) applications."
      },
    ],
  },
  {
    slug: "angle",
    name: "Angle",
    description: "Convert between different angle units like degrees, radians, gradians, and more.",
    detailedDescription: `
      An angle is a figure formed by two rays, called the sides of the angle, sharing a common endpoint, called the vertex of the angle.
      
      The radian (rad) is the SI unit of angle, defined as the angle subtended at the center of a circle by an arc equal in length to the radius. Other common units include degrees (°), gradians (grad), and revolutions (rev).
      
      Angle conversion is essential in mathematics, physics, engineering, navigation, and many other fields. Different angle units are often used in different contexts:
      degrees in everyday life and navigation, radians in mathematics and physics, and gradians in some engineering applications.
      
      A full circle is equal to 2π radians, 360 degrees, 400 gradians, or 1 revolution.
    `,
    units: [
      {
        id: "degree",
        name: "Degree",
        symbol: "°",
        ratio: 1,
        about: "A degree is a unit of angle equal to 1/360 of a full rotation. It is the most commonly used unit of angle in everyday life."
      },
      {
        id: "radian",
        name: "Radian",
        symbol: "rad",
        ratio: 57.2957795,
        about: "A radian is the SI unit of angle, defined as the angle subtended at the center of a circle by an arc equal in length to the radius. A full circle is 2π radians."
      },
      {
        id: "gradian",
        name: "Gradian",
        symbol: "grad",
        ratio: 0.9,
        about: "A gradian, also called a gon, is a unit of angle equal to 1/400 of a full rotation. It was introduced as part of the metric system and is used in some fields of engineering and surveying."
      },
      {
        id: "arcminute",
        name: "Arcminute",
        symbol: "′",
        ratio: 0.0166667,
        about: "An arcminute is a unit of angle equal to 1/60 of a degree. It is commonly used in astronomy, navigation, and angular measurement."
      },
      {
        id: "arcsecond",
        name: "Arcsecond",
        symbol: "″",
        ratio: 0.000277778,
        about: "An arcsecond is a unit of angle equal to 1/60 of an arcminute or 1/3600 of a degree. It is commonly used in astronomy, navigation, and angular measurement."
      },
      {
        id: "revolution",
        name: "Revolution",
        symbol: "rev",
        ratio: 360,
        about: "A revolution is a unit of angle equal to a full rotation or 360 degrees. It is commonly used in engineering and physics when describing rotational motion."
      },
    ],
  },
  {
    slug: "frequency",
    name: "Frequency",
    description: "Convert between different frequency units like hertz, kilohertz, megahertz, and more.",
    detailedDescription: `
      Frequency is the number of occurrences of a repeating event per unit of time. It is a scalar quantity with magnitude but no direction.
      
      The hertz (Hz) is the SI unit of frequency, defined as one cycle per second. Other common units include kilohertz (kHz), megahertz (MHz), gigahertz (GHz), and revolutions per minute (rpm).
      
      Frequency conversion is essential in physics, electronics, telecommunications, and many other fields. Different frequency units are often used in different contexts:
      hertz for sound waves and electrical signals, kilohertz and megahertz for radio frequencies, gigahertz for microwave and computer clock speeds, and rpm for rotational speeds.
      
      Accurate frequency conversion is crucial for designing electronic circuits, radio communications, and rotating machinery.
    `,
    units: [
      {
        id: "hertz",
        name: "Hertz",
        symbol: "Hz",
        ratio: 1,
        about: "The hertz is the SI unit of frequency, defined as one cycle per second. It is named after the German physicist Heinrich Hertz, who first conclusively proved the existence of electromagnetic waves."
      },
      {
        id: "kilohertz",
        name: "Kilohertz",
        symbol: "kHz",
        ratio: 1000,
        about: "A kilohertz is a unit of frequency equal to 1,000 hertz. It is commonly used for audio frequencies and medium-frequency radio signals."
      },
      {
        id: "megahertz",
        name: "Megahertz",
        symbol: "MHz",
        ratio: 1e6,
        about: "A megahertz is a unit of frequency equal to 1,000,000 hertz. It is commonly used for radio frequencies and computer clock speeds."
      },
      {
        id: "gigahertz",
        name: "Gigahertz",
        symbol: "GHz",
        ratio: 1e9,
        about: "A gigahertz is a unit of frequency equal to 1,000,000,000 hertz. It is commonly used for microwave frequencies, radar signals, and modern computer processor speeds."
      },
      {
        id: "terahertz",
        name: "Terahertz",
        symbol: "THz",
        ratio: 1e12,
        about: "A terahertz is a unit of frequency equal to 1,000,000,000,000 hertz. It is used in scientific research, particularly for the electromagnetic radiation between infrared and microwave bands."
      },
      {
        id: "rpm",
        name: "Revolutions per Minute",
        symbol: "rpm",
        ratio: 0.0166667,
        about: "Revolutions per minute is a unit of rotational frequency equal to the number of full rotations completed in one minute. It is commonly used to express the rotational speed of motors, engines, and other rotating machinery."
      },
      {
        id: "rps",
        name: "Revolutions per Second",
        symbol: "rps",
        ratio: 1,
        about: "Revolutions per second is a unit of rotational frequency equal to the number of full rotations completed in one second. It is equal to 60 rpm and is sometimes used in scientific and engineering contexts."
      },
    ],
  },
  {
    slug: "fuel",
    name: "Fuel Economy",
    description: "Convert between different fuel economy units like miles per gallon, kilometers per liter, and more.",
    detailedDescription: `
      Fuel economy is the relationship between the distance traveled and the amount of fuel consumed by a vehicle. It is a measure of how efficiently a vehicle uses fuel.
      
      Common units include miles per gallon (mpg), kilometers per liter (km/L), and liters per 100 kilometers (L/100km). The first two express how far a vehicle can travel per unit of fuel,
      while the last expresses how much fuel is needed to travel a fixed distance.
      
      Fuel economy conversion is essential in the automotive industry, transportation planning, and environmental assessment. Different regions use different units:
      miles per gallon in the United States and the United Kingdom, kilometers per liter in Japan and some other countries, and liters per 100 kilometers in most European countries.
      
      Accurate fuel economy conversion is crucial for comparing vehicles across different markets and for consumers traveling between regions with different measurement systems.
    `,
    units: [
      {
        id: "miles-per-gallon",
        name: "Miles per Gallon",
        symbol: "mpg",
        ratio: 0.425144,
        about: "Miles per gallon is a unit of fuel economy that expresses the distance traveled in miles per one US gallon of fuel consumed. It is commonly used in the United States and the United Kingdom."
      },
      {
        id: "kilometers-per-liter",
        name: "Kilometers per Liter",
        symbol: "km/L",
        ratio: 1,
        about: "Kilometers per liter is a unit of fuel economy that expresses the distance traveled in kilometers per one liter of fuel consumed. It is commonly used in Japan and some other countries."
      },
      {
        id: "liters-per-100km",
        name: "Liters per 100 Kilometers",
        symbol: "L/100km",
        ratio: 100,
        isInverse: true,
        about: "Liters per 100 kilometers is a unit of fuel consumption that expresses the amount of fuel in liters required to travel 100 kilometers. It is commonly used in most European countries and is the inverse of fuel economy."
      },
      {
        id: "miles-per-liter",
        name: "Miles per Liter",
        symbol: "mi/L",
        ratio: 1.60934,
        about: "Miles per liter is a unit of fuel economy that expresses the distance traveled in miles per one liter of fuel consumed. It is sometimes used for comparing fuel economy between US and metric systems."
      },
      {
        id: "gallons-per-100miles",
        name: "Gallons per 100 Miles",
        symbol: "gal/100mi",
        ratio: 42.5144,
        isInverse: true,
        about: "Gallons per 100 miles is a unit of fuel consumption that expresses the amount of fuel in US gallons required to travel 100 miles. It is the inverse of miles per gallon and is sometimes used for comparing vehicles with very different fuel economies."
      },
    ],
  },
  {
    slug: "data-transfer",
    name: "Data Transfer",
    description: "Convert between different data transfer rate units like bits per second, megabits per second, and more.",
    detailedDescription: `
      Data transfer rate is the amount of digital data that is moved from one place to another in a given time period. It is a measure of bandwidth and is crucial in telecommunications and computing.
      
      The bit per second (bps) is the basic unit of data transfer rate. Other common units include kilobits per second (kbps), megabits per second (Mbps), gigabits per second (Gbps), and their byte-based equivalents.
      
      Data transfer rate conversion is essential in networking, telecommunications, and computing. Different units are often used in different contexts:
      kilobits and megabits per second for internet connection speeds, megabytes and gigabytes per second for storage device transfer rates, and gigabits and terabits per second for high-speed network backbones.
      
      It's important to note the distinction between bits (b) and bytes (B), with one byte equal to 8 bits. This distinction is crucial when comparing data transfer rates, as a 100 Mbps (megabits per second) connection
      transfers data at approximately 12.5 MB/s (megabytes per second).
    `,
    units: [
      {
        id: "bit-per-second",
        name: "Bit per Second",
        symbol: "bps",
        ratio: 1,
        about: "A bit per second is the basic unit of data transfer rate, representing one binary digit (0 or 1) transmitted per second. It is used for measuring the lowest data transfer rates."
      },
      {
        id: "kilobit-per-second",
        name: "Kilobit per Second",
        symbol: "kbps",
        ratio: 1000,
        about: "A kilobit per second is a unit of data transfer rate equal to 1,000 bits per second. It was commonly used for dial-up modem speeds and low-bandwidth connections."
      },
      {
        id: "megabit-per-second",
        name: "Megabit per Second",
        symbol: "Mbps",
        ratio: 1e6,
        about: "A megabit per second is a unit of data transfer rate equal to 1,000,000 bits per second. It is commonly used for measuring broadband internet connection speeds."
      },
      {
        id: "gigabit-per-second",
        name: "Gigabit per Second",
        symbol: "Gbps",
        ratio: 1e9,
        about: "A gigabit per second is a unit of data transfer rate equal to 1,000,000,000 bits per second. It is used for high-speed network connections, modern Wi-Fi standards, and fiber optic internet."
      },
      {
        id: "terabit-per-second",
        name: "Terabit per Second",
        symbol: "Tbps",
        ratio: 1e12,
        about: "A terabit per second is a unit of data transfer rate equal to 1,000,000,000,000 bits per second. It is used for high-speed network connections, modern Wi-Fi standards, and fiber optic internet."
      },
    ],
  },
  {
    slug: "force",
    name: "Force",
    description: "Convert between different force units like newtons, pound-force, dynes, and more.",
    detailedDescription: `
      Force is an influence that can change the motion of an object. It has both magnitude and direction.
      
      The newton (N) is the SI derived unit of force. Other common units include pound-force (lbf), dyne (dyn), and kilogram-force (kgf).
      
      Force conversion is crucial in physics, engineering, and mechanics. Different regions and industries use different units:
      newtons in scientific and most engineering contexts, pound-force in some US engineering applications, and dynes in CGS physics.
    `,
    units: [
      {
        id: "newton",
        name: "Newton",
        symbol: "N",
        ratio: 1,
        about: "The newton is the SI unit of force. It is defined as the force needed to accelerate one kilogram of mass at the rate of one meter per second squared."
      },
      {
        id: "kilonewton",
        name: "Kilonewton",
        symbol: "kN",
        ratio: 1000,
        about: "A kilonewton is a unit of force equal to 1,000 newtons. It is commonly used in structural engineering and construction."
      },
      {
        id: "pound-force",
        name: "Pound-force",
        symbol: "lbf",
        ratio: 4.448222,
        about: "Pound-force is a unit of force in some systems of measurement including English Engineering units and the foot-pound-second system. It is the gravitational force exerted on a mass of one avoirdupois pound on the surface of Earth."
      },
      {
        id: "dyne",
        name: "Dyne",
        symbol: "dyn",
        ratio: 0.00001,
        about: "A dyne is a unit of force centeredimeter-gram-second (CGS) system of units. One dyne is equal to 10^-5 newtons."
      },
      {
        id: "kilogram-force",
        name: "Kilogram-force",
        symbol: "kgf",
        ratio: 9.80665,
        about: "Kilogram-force is a gravitational metric unit of force. It is equal to the magnitude of the force exerted on one kilogram of mass in a 9.80665 m/s² gravitational field."
      },
    ]
  },
  {
    slug: "torque",
    name: "Torque",
    description: "Convert between different torque units like newton-meters, foot-pounds, and more.",
    detailedDescription: `
      Torque is the rotational equivalent of linear force. It measures the tendency of a force to rotate an object about an axis, fulcrum, or pivot.
      
      The newton-meter (N·m) is the SI unit of torque. Other common units include foot-pounds (ft·lb) and inch-pounds (in·lb).
      
      Torque conversion is essential in automotive engineering, mechanics, and machinery design.
    `,
    units: [
      {
        id: "newton-meter",
        name: "Newton Meter",
        symbol: "N·m",
        ratio: 1,
        about: "The newton-meter is the SI derived unit of torque. It is also a unit of work and energy (joule), but they are distinct concepts."
      },
      {
        id: "foot-pound",
        name: "Foot-Pound",
        symbol: "ft·lb",
        ratio: 1.3558179,
        about: "The foot-pound is a unit of torque (and energy) in the Imperial and US customary systems. It is the torque created by one pound-force acting at a perpendicular distance of one foot."
      },
      {
        id: "inch-pound",
        name: "Inch-Pound",
        symbol: "in·lb",
        ratio: 0.1129848,
        about: "The inch-pound is a unit of torque equal to one twelfth of a foot-pound. It is commonly used for smaller fastening specifications."
      },
    ]
  },
  {
    slug: "illuminance",
    name: "Illuminance",
    description: "Convert between illuminance units like lux and foot-candles.",
    detailedDescription: `
      Illuminance is the total luminous flux incident on a surface, per unit area. It is a measure of how much the incident light illuminates the surface.
      
      The lux (lx) is the SI derived unit of illuminance. The foot-candle (fc) is a non-SI unit used in photography, film, and architecture in the US.
    `,
    units: [
      {
        id: "lux",
        name: "Lux",
        symbol: "lx",
        ratio: 1,
        about: "The lux is the SI derived unit of illuminance, measuring luminous flux per unit area. One lux is equal to one lumen per square meter."
      },
      {
        id: "foot-candle",
        name: "Foot-candle",
        symbol: "fc",
        ratio: 10.7639,
        about: "The foot-candle is a non-SI unit of illuminance. One foot-candle is defined as the amount of illumination the inside surface of a one-foot-radius sphere would be receiving if there were a uniform point source of one candela at the center."
      },
    ]
  },
  {
    slug: "typography",
    name: "Typography",
    description: "Convert between typography units like pixels, points, ems, and rems.",
    detailedDescription: `
      Typography units are used in graphic design, web development, and print to measure font sizes, spacing, and layout dimensions.
      
      Common units include pixels (px) for screens, points (pt) for print, and relative units like rem and em for web accessibility.
      
      Note: Conversions involving physical units like inches or millimeters assume a standard screen density of 96 pixels per inch (PPI).
    `,
    units: [
      {
        id: "pixel",
        name: "Pixel",
        symbol: "px",
        ratio: 1,
        about: "A pixel is the smallest controllable element of a picture represented on the screen. In web CSS, it is defined as 1/96th of an inch."
      },
      {
        id: "point",
        name: "Point",
        symbol: "pt",
        ratio: 1.333333,
        about: "A point is a unit of length used in typography. In modern desktop publishing, one point is equal to 1/72 of an inch (approx 1.33 pixels)."
      },
      {
        id: "rem",
        name: "Rem (Root Em)",
        symbol: "rem",
        ratio: 16,
        about: "Rem is a relative unit in CSS, equal to the font size of the root element (usually the html tag). The standard browser default is 16px."
      },
      {
        id: "pica",
        name: "Pica",
        symbol: "pc",
        ratio: 16,
        about: "A pica is a typographic unit equal to 12 points. It is commonly used in print design."
      },
      {
        id: "inch",
        name: "Inch",
        symbol: "in",
        ratio: 96,
        about: "An inch in digital typography is typically defined as 96 pixels (CSS inch)."
      },
      {
        id: "millimeter",
        name: "Millimeter",
        symbol: "mm",
        ratio: 3.7795276,
        about: "A millimeter in digital typography is derived from the inch. 1 inch = 25.4 mm."
      },
    ]

  },
  {
    slug: "electric-current",
    name: "Electric Current",
    description: "Convert between different electric current units like amperes, milliamperes, and more.",
    detailedDescription: `
      Electric current is the rate of flow of electric charge past a point or region. An electric current is said to exist when there is a net flow of electric charge through a region.
      
      The ampere (A) is the SI base unit of electric current. Other common units include milliamperes (mA) and kiloamperes (kA).
      
      Electric current conversion is essential in electrical engineering, physics, and electronics.
    `,
    units: [
      {
        id: "ampere",
        name: "Ampere",
        symbol: "A",
        ratio: 1,
        about: "The ampere is the SI base unit of electric current. It is named after André-Marie Ampère, one of the main discoverers of electromagnetism."
      },
      {
        id: "milliampere",
        name: "Milliampere",
        symbol: "mA",
        ratio: 0.001,
        about: "A milliampere is a unit of electric current equal to one thousandth (1/1000) of an ampere. It is commonly used to measure small currents in electronics."
      },
      {
        id: "kiloampere",
        name: "Kiloampere",
        symbol: "kA",
        ratio: 1000,
        about: "A kiloampere is a unit of electric current equal to 1,000 amperes. It is used in power distribution and large electrical systems."
      },
      {
        id: "microampere",
        name: "Microampere",
        symbol: "μA",
        ratio: 0.000001,
        about: "A microampere is a unit of electric current equal to one millionth (1/1,000,000) of an ampere."
      },
    ]
  },
  {
    slug: "voltage",
    name: "Voltage",
    description: "Convert between different voltage units like volts, millivolts, and kilovolts.",
    detailedDescription: `
      Voltage, also known as electric pressure or electric tension, is the difference in electric potential between two points.
      
      The volt (V) is the SI derived unit for electric potential, electric potential difference, and electromotive force.
      
      Voltage conversion is crucial in electrical engineering, electronics, and power distribution.
    `,
    units: [
      {
        id: "volt",
        name: "Volt",
        symbol: "V",
        ratio: 1,
        about: "The volt is the SI derived unit of electric potential difference. It is named after the Italian physicist Alessandro Volta."
      },
      {
        id: "millivolt",
        name: "Millivolt",
        symbol: "mV",
        ratio: 0.001,
        about: "A millivolt is a unit of voltage equal to one thousandth (1/1000) of a volt."
      },
      {
        id: "kilovolt",
        name: "Kilovolt",
        symbol: "kV",
        ratio: 1000,
        about: "A kilovolt is a unit of voltage equal to 1,000 volts. It is commonly used in power transmission."
      },
      {
        id: "microvolt",
        name: "Microvolt",
        symbol: "μV",
        ratio: 0.000001,
        about: "A microvolt is a unit of voltage equal to one millionth (1/1,000,000) of a volt."
      },
    ]
  },
  {
    slug: "resistance",
    name: "Resistance",
    description: "Convert between different electrical resistance units like ohms, kiloohms, and megaohms.",
    detailedDescription: `
      Electrical resistance is a measure of the opposition to current flow in an electrical circuit.
      
      The ohm (Ω) is the SI derived unit of electrical resistance.
    `,
    units: [
      {
        id: "ohm",
        name: "Ohm",
        symbol: "Ω",
        ratio: 1,
        about: "The ohm is the SI derived unit of electrical resistance. It is named after German physicist Georg Simon Ohm."
      },
      {
        id: "kiloohm",
        name: "Kiloohm",
        symbol: "kΩ",
        ratio: 1000,
        about: "A kiloohm is a unit of electrical resistance equal to 1,000 ohms."
      },
      {
        id: "megaohm",
        name: "Megaohm",
        symbol: "MΩ",
        ratio: 1000000,
        about: "A megaohm is a unit of electrical resistance equal to 1,000,000 ohms."
      },
      {
        id: "milliohm",
        name: "Milliohm",
        symbol: "mΩ",
        ratio: 0.001,
        about: "A milliohm is a unit of electrical resistance equal to one thousandth of an ohm. It is often used to measure very low resistance."
      },
    ]
  },
  {
    slug: "flow-rate",
    name: "Flow Rate",
    description: "Convert between different flow rate units like liters per second, gallons per minute, and more.",
    detailedDescription: `
      Volumetric flow rate is the volume of fluid which passes per unit time.
      
      Common units include cubic meters per second (m³/s), liters per minute (L/min), and gallons per minute (GPM).
      
      Flow rate conversion is important in fluid dynamics, civil engineering, and industrial processes.
    `,
    units: [
      {
        id: "cubic-meter-per-second",
        name: "Cubic Meter per Second",
        symbol: "m³/s",
        ratio: 1,
        about: "The cubic meter per second is the SI derived unit of volumetric flow rate."
      },
      {
        id: "liter-per-second",
        name: "Liter per Second",
        symbol: "L/s",
        ratio: 0.001,
        about: "A liter per second is a metric unit of flow rate equal to one thousandth of a cubic meter per second."
      },
      {
        id: "liter-per-minute",
        name: "Liter per Minute",
        symbol: "L/min",
        ratio: 0.0000166667,
        about: "A liter per minute is a metric unit of flow rate equal to 1/60 of a liter per second."
      },
      {
        id: "gallon-per-minute",
        name: "Gallon per Minute (US)",
        symbol: "GPM",
        ratio: 0.0000630902,
        about: "The US gallon per minute is a unit of flow rate commonly used in the United States."
      },
      {
        id: "cubic-foot-per-minute",
        name: "Cubic Foot per Minute",
        symbol: "CFM",
        ratio: 0.000471947,
        about: "The cubic foot per minute is a unit of flow rate commonly used in the United States, especially for airflow."
      },
    ]
  },
]

// Helper functions to access the data
export function getAllCategories() {
  return categories
}

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug)
}

export function getUnit(category: Category, unitId: string) {
  return category.units.find((unit) => unit.id === unitId)
}

// ... existing code ...

export function getConversionInfo(fromUnit: any, toUnit: any) {
  if (!fromUnit || !toUnit) return null

  // Temperature conversions (already implemented)
  if (fromUnit.id === "celsius" && toUnit.id === "fahrenheit") {
    return {
      formula: "(°C × 9/5) + 32 = °F",
      explanation: "To convert from Celsius to Fahrenheit, multiply the temperature by 9/5 (or 1.8) and then add 32.",
      example: "20°C × 9/5 + 32 = 36 + 32 = 68°F",
    }
  } else if (fromUnit.id === "fahrenheit" && toUnit.id === "celsius") {
    return {
      formula: "(°F - 32) × 5/9 = °C",
      explanation:
        "To convert from Fahrenheit to Celsius, subtract 32 from the temperature and then multiply by 5/9 (or 0.5556).",
      example: "(68°F - 32) × 5/9 = 36 × 5/9 = 20°C",
    }
  } else if (fromUnit.id === "celsius" && toUnit.id === "kelvin") {
    return {
      formula: "°C + 273.15 = K",
      explanation: "To convert from Celsius to Kelvin, add 273.15 to the temperature.",
      example: "20°C + 273.15 = 293.15K",
    }
  } else if (fromUnit.id === "kelvin" && toUnit.id === "celsius") {
    return {
      formula: "K - 273.15 = °C",
      explanation: "To convert from Kelvin to Celsius, subtract 273.15 from the temperature.",
      example: "293.15K - 273.15 = 20°C",
    }
  } else if (fromUnit.id === "fahrenheit" && toUnit.id === "kelvin") {
    return {
      formula: "(°F - 32) × 5/9 + 273.15 = K",
      explanation:
        "To convert from Fahrenheit to Kelvin, first convert to Celsius by subtracting 32 and multiplying by 5/9, then add 273.15.",
      example: "(68°F - 32) × 5/9 + 273.15 = 36 × 5/9 + 273.15 = 20°C + 273.15 = 293.15K",
    }
  } else if (fromUnit.id === "kelvin" && toUnit.id === "fahrenheit") {
    return {
      formula: "(K - 273.15) × 9/5 + 32 = °F",
      explanation:
        "To convert from Kelvin to Fahrenheit, first convert to Celsius by subtracting 273.15, then multiply by 9/5 and add 32.",
      example: "(293.15K - 273.15) × 9/5 + 32 = 20°C × 9/5 + 32 = 36 + 32 = 68°F",
    }
  }

  // Length conversions (already implemented)
  if (fromUnit.id === "meter" && toUnit.id === "foot") {
    return {
      formula: "m × 3.28084 = ft",
      explanation: "To convert from meters to feet, multiply the length by 3.28084.",
      example: "10m × 3.28084 = 32.8084ft",
    }
  } else if (fromUnit.id === "foot" && toUnit.id === "meter") {
    return {
      formula: "ft × 0.3048 = m",
      explanation: "To convert from feet to meters, multiply the length by 0.3048.",
      example: "10ft × 0.3048 = 3.048m",
    }
  } else if (fromUnit.id === "kilometer" && toUnit.id === "mile") {
    return {
      formula: "km × 0.621371 = mi",
      explanation: "To convert from kilometers to miles, multiply the distance by 0.621371.",
      example: "10km × 0.621371 = 6.21371mi",
    }
  } else if (fromUnit.id === "mile" && toUnit.id === "kilometer") {
    return {
      formula: "mi × 1.60934 = km",
      explanation: "To convert from miles to kilometers, multiply the distance by 1.60934.",
      example: "10mi × 1.60934 = 16.0934km",
    }
  }

  // Weight conversions (already implemented)
  if (fromUnit.id === "kilogram" && toUnit.id === "pound") {
    return {
      formula: "kg × 2.20462 = lb",
      explanation: "To convert from kilograms to pounds, multiply the weight by 2.20462.",
      example: "10kg × 2.20462 = 22.0462lb",
    }
  } else if (fromUnit.id === "pound" && toUnit.id === "kilogram") {
    return {
      formula: "lb × 0.453592 = kg",
      explanation: "To convert from pounds to kilograms, multiply the weight by 0.453592.",
      example: "10lb × 0.453592 = 4.53592kg",
    }
  }

  // Volume conversions (already implemented)
  if (fromUnit.id === "liter" && toUnit.id === "gallon") {
    return {
      formula: "L × 0.264172 = gal",
      explanation: "To convert from liters to US gallons, multiply the volume by 0.264172.",
      example: "10L × 0.264172 = 2.64172gal",
    }
  } else if (fromUnit.id === "gallon" && toUnit.id === "liter") {
    return {
      formula: "gal × 3.78541 = L",
      explanation: "To convert from US gallons to liters, multiply the volume by 3.78541.",
      example: "10gal × 3.78541 = 37.8541L",
    }
  }

  // Area conversions
  if (fromUnit.id === "square-meter" && toUnit.id === "square-foot") {
    return {
      formula: "m² × 10.7639 = ft²",
      explanation: "To convert from square meters to square feet, multiply the area by 10.7639.",
      example: "10m² × 10.7639 = 107.639ft²",
    }
  } else if (fromUnit.id === "square-foot" && toUnit.id === "square-meter") {
    return {
      formula: "ft² × 0.092903 = m²",
      explanation: "To convert from square feet to square meters, multiply the area by 0.092903.",
      example: "10ft² × 0.092903 = 0.92903m²",
    }
  } else if (fromUnit.id === "hectare" && toUnit.id === "acre") {
    return {
      formula: "ha × 2.47105 = ac",
      explanation: "To convert from hectares to acres, multiply the area by 2.47105.",
      example: "10ha × 2.47105 = 24.7105ac",
    }
  } else if (fromUnit.id === "acre" && toUnit.id === "hectare") {
    return {
      formula: "ac × 0.404686 = ha",
      explanation: "To convert from acres to hectares, multiply the area by 0.404686.",
      example: "10ac × 0.404686 = 4.04686ha",
    }
  }

  // Speed conversions
  if (fromUnit.id === "kilometer-per-hour" && toUnit.id === "mile-per-hour") {
    return {
      formula: "km/h × 0.621371 = mph",
      explanation: "To convert from kilometers per hour to miles per hour, multiply the speed by 0.621371.",
      example: "100km/h × 0.621371 = 62.1371mph",
    }
  } else if (fromUnit.id === "mile-per-hour" && toUnit.id === "kilometer-per-hour") {
    return {
      formula: "mph × 1.60934 = km/h",
      explanation: "To convert from miles per hour to kilometers per hour, multiply the speed by 1.60934.",
      example: "60mph × 1.60934 = 96.5604km/h",
    }
  } else if (fromUnit.id === "meter-per-second" && toUnit.id === "kilometer-per-hour") {
    return {
      formula: "m/s × 3.6 = km/h",
      explanation: "To convert from meters per second to kilometers per hour, multiply the speed by 3.6.",
      example: "10m/s × 3.6 = 36km/h",
    }
  } else if (fromUnit.id === "kilometer-per-hour" && toUnit.id === "meter-per-second") {
    return {
      formula: "km/h × 0.277778 = m/s",
      explanation: "To convert from kilometers per hour to meters per second, multiply the speed by 0.277778.",
      example: "36km/h × 0.277778 = 10m/s",
    }
  }

  // Time conversions
  if (fromUnit.id === "second" && toUnit.id === "minute") {
    return {
      formula: "s ÷ 60 = min",
      explanation: "To convert from seconds to minutes, divide the time by 60.",
      example: "120s ÷ 60 = 2min",
    }
  } else if (fromUnit.id === "minute" && toUnit.id === "second") {
    return {
      formula: "min × 60 = s",
      explanation: "To convert from minutes to seconds, multiply the time by 60.",
      example: "2min × 60 = 120s",
    }
  } else if (fromUnit.id === "minute" && toUnit.id === "hour") {
    return {
      formula: "min ÷ 60 = h",
      explanation: "To convert from minutes to hours, divide the time by 60.",
      example: "120min ÷ 60 = 2h",
    }
  } else if (fromUnit.id === "hour" && toUnit.id === "minute") {
    return {
      formula: "h × 60 = min",
      explanation: "To convert from hours to minutes, multiply the time by 60.",
      example: "2h × 60 = 120min",
    }
  } else if (fromUnit.id === "hour" && toUnit.id === "day") {
    return {
      formula: "h ÷ 24 = d",
      explanation: "To convert from hours to days, divide the time by 24.",
      example: "48h ÷ 24 = 2d",
    }
  } else if (fromUnit.id === "day" && toUnit.id === "hour") {
    return {
      formula: "d × 24 = h",
      explanation: "To convert from days to hours, multiply the time by 24.",
      example: "2d × 24 = 48h",
    }
  }

  // Digital storage conversions
  if (fromUnit.id === "bit" && toUnit.id === "byte") {
    return {
      formula: "b ÷ 8 = B",
      explanation: "To convert from bits to bytes, divide by 8.",
      example: "8b ÷ 8 = 1B",
    }
  } else if (fromUnit.id === "byte" && toUnit.id === "bit") {
    return {
      formula: "B × 8 = b",
      explanation: "To convert from bytes to bits, multiply by 8.",
      example: "1B × 8 = 8b",
    }
  } else if (fromUnit.id === "byte" && toUnit.id === "kilobyte") {
    return {
      formula: "B ÷ 1000 = KB",
      explanation: "To convert from bytes to kilobytes, divide by 1,000.",
      example: "2000B ÷ 1000 = 2KB",
    }
  } else if (fromUnit.id === "kilobyte" && toUnit.id === "byte") {
    return {
      formula: "KB × 1000 = B",
      explanation: "To convert from kilobytes to bytes, multiply by 1,000.",
      example: "2KB × 1000 = 2000B",
    }
  } else if (fromUnit.id === "kilobyte" && toUnit.id === "megabyte") {
    return {
      formula: "KB ÷ 1000 = MB",
      explanation: "To convert from kilobytes to megabytes, divide by 1,000.",
      example: "2000KB ÷ 1000 = 2MB",
    }
  } else if (fromUnit.id === "megabyte" && toUnit.id === "kilobyte") {
    return {
      formula: "MB × 1000 = KB",
      explanation: "To convert from megabytes to kilobytes, multiply by 1,000.",
      example: "2MB × 1000 = 2000KB",
    }
  }

  // Pressure conversions
  if (fromUnit.id === "pascal" && toUnit.id === "kilopascal") {
    return {
      formula: "Pa ÷ 1000 = kPa",
      explanation: "To convert from pascals to kilopascals, divide by 1,000.",
      example: "2000Pa ÷ 1000 = 2kPa",
    }
  } else if (fromUnit.id === "kilopascal" && toUnit.id === "pascal") {
    return {
      formula: "kPa × 1000 = Pa",
      explanation: "To convert from kilopascals to pascals, multiply by 1,000.",
      example: "2kPa × 1000 = 2000Pa",
    }
  } else if (fromUnit.id === "bar" && toUnit.id === "pascal") {
    return {
      formula: "bar × 100000 = Pa",
      explanation: "To convert from bars to pascals, multiply by 100,000.",
      example: "1bar × 100000 = 100000Pa",
    }
  } else if (fromUnit.id === "pascal" && toUnit.id === "bar") {
    return {
      formula: "Pa ÷ 100000 = bar",
      explanation: "To convert from pascals to bars, divide by 100,000.",
      example: "100000Pa ÷ 100000 = 1bar",
    }
  } else if (fromUnit.id === "atmosphere" && toUnit.id === "pascal") {
    return {
      formula: "atm × 101325 = Pa",
      explanation: "To convert from atmospheres to pascals, multiply by 101,325.",
      example: "1atm × 101325 = 101325Pa",
    }
  } else if (fromUnit.id === "pascal" && toUnit.id === "atmosphere") {
    return {
      formula: "Pa ÷ 101325 = atm",
      explanation: "To convert from pascals to atmospheres, divide by 101,325.",
      example: "101325Pa ÷ 101325 = 1atm",
    }
  }

  // Energy conversions
  if (fromUnit.id === "joule" && toUnit.id === "kilojoule") {
    return {
      formula: "J ÷ 1000 = kJ",
      explanation: "To convert from joules to kilojoules, divide by 1,000.",
      example: "2000J ÷ 1000 = 2kJ",
    }
  } else if (fromUnit.id === "kilojoule" && toUnit.id === "joule") {
    return {
      formula: "kJ × 1000 = J",
      explanation: "To convert from kilojoules to joules, multiply by 1,000.",
      example: "2kJ × 1000 = 2000J",
    }
  } else if (fromUnit.id === "joule" && toUnit.id === "calorie") {
    return {
      formula: "J × 0.239006 = cal",
      explanation: "To convert from joules to calories, multiply by 0.239006.",
      example: "100J × 0.239006 = 23.9006cal",
    }
  } else if (fromUnit.id === "calorie" && toUnit.id === "joule") {
    return {
      formula: "cal × 4.184 = J",
      explanation: "To convert from calories to joules, multiply by 4.184.",
      example: "100cal × 4.184 = 418.4J",
    }
  } else if (fromUnit.id === "joule" && toUnit.id === "kilowatt-hour") {
    return {
      formula: "J ÷ 3600000 = kWh",
      explanation: "To convert from joules to kilowatt-hours, divide by 3,600,000.",
      example: "3600000J ÷ 3600000 = 1kWh",
    }
  } else if (fromUnit.id === "kilowatt-hour" && toUnit.id === "joule") {
    return {
      formula: "kWh × 3600000 = J",
      explanation: "To convert from kilowatt-hours to joules, multiply by 3,600,000.",
      example: "1kWh × 3600000 = 3600000J",
    }
  }

  // Power conversions
  if (fromUnit.id === "watt" && toUnit.id === "kilowatt") {
    return {
      formula: "W ÷ 1000 = kW",
      explanation: "To convert from watts to kilowatts, divide by 1,000.",
      example: "2000W ÷ 1000 = 2kW",
    }
  } else if (fromUnit.id === "kilowatt" && toUnit.id === "watt") {
    return {
      formula: "kW × 1000 = W",
      explanation: "To convert from kilowatts to watts, multiply by 1,000.",
      example: "2kW × 1000 = 2000W",
    }
  } else if (fromUnit.id === "watt" && toUnit.id === "horsepower") {
    return {
      formula: "W × 0.00134102 = hp",
      explanation: "To convert from watts to horsepower, multiply by 0.00134102.",
      example: "746W × 0.00134102 = 1hp",
    }
  } else if (fromUnit.id === "horsepower" && toUnit.id === "watt") {
    return {
      formula: "hp × 745.7 = W",
      explanation: "To convert from horsepower to watts, multiply by 745.7.",
      example: "1hp × 745.7 = 745.7W",
    }
  } else if (fromUnit.id === "kilowatt" && toUnit.id === "horsepower") {
    return {
      formula: "kW × 1.34102 = hp",
      explanation: "To convert from kilowatts to horsepower, multiply by 1.34102.",
      example: "1kW × 1.34102 = 1.34102hp",
    }
  } else if (fromUnit.id === "horsepower" && toUnit.id === "kilowatt") {
    return {
      formula: "hp × 0.7457 = kW",
      explanation: "To convert from horsepower to kilowatts, multiply by 0.7457.",
      example: "1hp × 0.7457 = 0.7457kW",
    }
  }

  // Angle conversions
  if (fromUnit.id === "degree" && toUnit.id === "radian") {
    return {
      formula: "° × (π/180) = rad",
      explanation: "To convert from degrees to radians, multiply by π/180.",
      example: "180° × (π/180) = π rad ≈ 3.14159 rad",
    }
  } else if (fromUnit.id === "radian" && toUnit.id === "degree") {
    return {
      formula: "rad × (180/π) = °",
      explanation: "To convert from radians to degrees, multiply by 180/π.",
      example: "π rad × (180/π) = 180°",
    }
  } else if (fromUnit.id === "degree" && toUnit.id === "gradian") {
    return {
      formula: "° × (10/9) = grad",
      explanation: "To convert from degrees to gradians, multiply by 10/9.",
      example: "90° × (10/9) = 100 grad",
    }
  } else if (fromUnit.id === "gradian" && toUnit.id === "degree") {
    return {
      formula: "grad × (9/10) = °",
      explanation: "To convert from gradians to degrees, multiply by 9/10.",
      example: "100 grad × (9/10) = 90°",
    }
  } else if (fromUnit.id === "degree" && toUnit.id === "revolution") {
    return {
      formula: "° ÷ 360 = rev",
      explanation: "To convert from degrees to revolutions, divide by 360.",
      example: "180° ÷ 360 = 0.5 rev",
    }
  } else if (fromUnit.id === "revolution" && toUnit.id === "degree") {
    return {
      formula: "rev × 360 = °",
      explanation: "To convert from revolutions to degrees, multiply by 360.",
      example: "0.5 rev × 360 = 180°",
    }
  }

  // Frequency conversions
  if (fromUnit.id === "hertz" && toUnit.id === "kilohertz") {
    return {
      formula: "Hz ÷ 1000 = kHz",
      explanation: "To convert from hertz to kilohertz, divide by 1,000.",
      example: "2000Hz ÷ 1000 = 2kHz",
    }
  } else if (fromUnit.id === "kilohertz" && toUnit.id === "hertz") {
    return {
      formula: "kHz × 1000 = Hz",
      explanation: "To convert from kilohertz to hertz, multiply by 1,000.",
      example: "2kHz × 1000 = 2000Hz",
    }
  } else if (fromUnit.id === "kilohertz" && toUnit.id === "megahertz") {
    return {
      formula: "kHz ÷ 1000 = MHz",
      explanation: "To convert from kilohertz to megahertz, divide by 1,000.",
      example: "2000kHz ÷ 1000 = 2MHz",
    }
  } else if (fromUnit.id === "megahertz" && toUnit.id === "kilohertz") {
    return {
      formula: "MHz × 1000 = kHz",
      explanation: "To convert from megahertz to kilohertz, multiply by 1,000.",
      example: "2MHz × 1000 = 2000kHz",
    }
  } else if (fromUnit.id === "hertz" && toUnit.id === "rpm") {
    return {
      formula: "Hz × 60 = rpm",
      explanation: "To convert from hertz to revolutions per minute, multiply by 60.",
      example: "1Hz × 60 = 60rpm",
    }
  } else if (fromUnit.id === "rpm" && toUnit.id === "hertz") {
    return {
      formula: "rpm ÷ 60 = Hz",
      explanation: "To convert from revolutions per minute to hertz, divide by 60.",
      example: "60rpm ÷ 60 = 1Hz",
    }
  }

  // Fuel economy conversions
  if (fromUnit.id === "miles-per-gallon" && toUnit.id === "kilometers-per-liter") {
    return {
      formula: "mpg × 0.425144 = km/L",
      explanation: "To convert from miles per gallon to kilometers per liter, multiply by 0.425144.",
      example: "30mpg × 0.425144 = 12.75432km/L",
    }
  } else if (fromUnit.id === "kilometers-per-liter" && toUnit.id === "miles-per-gallon") {
    return {
      formula: "km/L × 2.35215 = mpg",
      explanation: "To convert from kilometers per liter to miles per gallon, multiply by 2.35215.",
      example: "12km/L × 2.35215 = 28.2258mpg",
    }
  } else if (fromUnit.id === "miles-per-gallon" && toUnit.id === "liters-per-100km") {
    return {
      formula: "235.215 ÷ mpg = L/100km",
      explanation: "To convert from miles per gallon to liters per 100 kilometers, divide 235.215 by the mpg value.",
      example: "235.215 ÷ 30mpg = 7.84L/100km",
    }
  } else if (fromUnit.id === "liters-per-100km" && toUnit.id === "miles-per-gallon") {
    return {
      formula: "235.215 ÷ (L/100km) = mpg",
      explanation: "To convert from liters per 100 kilometers to miles per gallon, divide 235.215 by the L/100km value.",
      example: "235.215 ÷ 8L/100km = 29.4mpg",
    }
  }

  // Data transfer rate conversions
  if (fromUnit.id === "bit-per-second" && toUnit.id === "kilobit-per-second") {
    return {
      formula: "bps ÷ 1000 = kbps",
      explanation: "To convert from bits per second to kilobits per second, divide by 1,000.",
      example: "2000bps ÷ 1000 = 2kbps",
    }
  } else if (fromUnit.id === "kilobit-per-second" && toUnit.id === "bit-per-second") {
    return {
      formula: "kbps × 1000 = bps",
      explanation: "To convert from kilobits per second to bits per second, multiply by 1,000.",
      example: "2kbps × 1000 = 2000bps",
    }
  } else if (fromUnit.id === "kilobit-per-second" && toUnit.id === "megabit-per-second") {
    return {
      formula: "kbps ÷ 1000 = Mbps",
      explanation: "To convert from kilobits per second to megabits per second, divide by 1,000.",
      example: "2000kbps ÷ 1000 = 2Mbps",
    }
  } else if (fromUnit.id === "megabit-per-second" && toUnit.id === "kilobit-per-second") {
    return {
      formula: "Mbps × 1000 = kbps",
      explanation: "To convert from megabits per second to kilobits per second, multiply by 1,000.",
      example: "2Mbps × 1000 = 2000kbps",
    }
  } else if (fromUnit.id === "bit-per-second" && toUnit.id === "byte-per-second") {
    return {
      formula: "bps ÷ 8 = B/s",
      explanation: "To convert from bits per second to bytes per second, divide by 8.",
      example: "8bps ÷ 8 = 1B/s",
    }
  } else if (fromUnit.id === "byte-per-second" && toUnit.id === "bit-per-second") {
    return {
      formula: "B/s × 8 = bps",
      explanation: "To convert from bytes per second to bits per second, multiply by 8.",
      example: "1B/s × 8 = 8bps",
    }
  }
}

// Main conversion function
export function convert(value: number, fromUnit: Unit, toUnit: Unit): number {
  if (fromUnit.id === toUnit.id) return value

  // Temperature
  if (fromUnit.id === "celsius" || fromUnit.id === "fahrenheit" || fromUnit.id === "kelvin") {
    let celsius: number
    if (fromUnit.id === "celsius") celsius = value
    else if (fromUnit.id === "fahrenheit") celsius = ((value - 32) * 5) / 9
    else if (fromUnit.id === "kelvin") celsius = value - 273.15
    else celsius = value

    if (toUnit.id === "celsius") return celsius
    if (toUnit.id === "fahrenheit") return (celsius * 9) / 5 + 32
    if (toUnit.id === "kelvin") return celsius + 273.15
  }

  // Fuel Economy (Inverse units)
  if (fromUnit.isInverse || toUnit.isInverse) {
    // Base unit: km/L (Normal)
    let baseValue: number // in km/L

    if (fromUnit.isInverse) {
      if (value === 0) baseValue = Infinity
      else baseValue = fromUnit.ratio / value
    } else {
      baseValue = value * fromUnit.ratio
    }

    if (toUnit.isInverse) {
      if (baseValue === 0) return Infinity
      if (baseValue === Infinity) return 0
      return toUnit.ratio / baseValue
    } else {
      return baseValue / toUnit.ratio
    }
  }

  // Standard conversion (ratio based)
  return (value * fromUnit.ratio) / toUnit.ratio
}

