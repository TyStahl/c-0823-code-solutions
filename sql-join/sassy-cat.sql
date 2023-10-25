select
"actors"."firstName",
"actors"."lastName"


from

"actors"

JOIN

"castMembers" using ("actorId")

join

"films" using ("filmId")

where "films"."title" = 'Jersey Sassy'
