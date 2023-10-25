select
"films"."title" as "title",
"films"."releaseYear" as "releaseYear",
"genres"."name" as "genre"

from
"films"

join "filmGenre" using ("filmId")
join "genres" using ("genreId")


where "films"."title" = 'Boogie Amelie'
