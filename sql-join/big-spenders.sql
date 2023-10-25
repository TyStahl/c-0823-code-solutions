SELECT  "payments"."amount",
         "customers"."firstName",
        "customers"."lastName"

FROM  "payments"

JOIN "customers" using ("customerId")

ORDER BY "payments"."amount" desc

limit 10;
