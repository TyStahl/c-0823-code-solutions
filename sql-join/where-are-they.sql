select
"addresses"."line1" as "address line 1",
"addresses"."district" as "district",
"cities"."name" as "city",
"countries"."name" as "country"


from
"addresses"

join
"cities" using ("cityId")
join
"countries" using ("countryId")
