state

users {
	id: 1,
	username: 'blah'
}

decisions:  {
	id: 1,
	title: 'title', 
	items: [{
		id: 1,
		description:'description1',
		category:'con', 
		weight: 2
	}, 
	{
		id: 2,
		description:'description2',
		category:'con', 
		weight: 4
	},

}



combined: 

users {
	id: 1,
	username: 'blah', 
	decisions:  [{
		id: 1,
		title: 'title1', 
		items: [{
			id: 1,
			description:'description1',
			category:'con', 
			weight: 2
		}, 
		{
			id: 2,
			description:'description2',
			category:'con', 
			weight: 4
		}]

	}, 
	{
		id: 2,
		title: 'title2', 
		items: [{
			id: 3,
			description:'description3',
			category:'con', 
			weight: 2
		}, 
		{
			id: 4,
			description:'description4',
			category:'con', 
			weight: 4
		}]

	}]
}
