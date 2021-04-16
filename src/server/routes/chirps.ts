import { Router } from 'express';
import ChirpStore from '../utils/chirpstore'

const chirpsRouter = Router();

// GET api/chirps/all  => all chirps
chirpsRouter.get('/all', (req,res) => {
    const data = ChirpStore.GetChirps()
    const allChirps = Object.keys(data).map((key) => {
        return {
            id: key,
            ...data[key]            
        }
    })
    allChirps.pop();
    res.json(allChirps);    
});


// GET api/chirps/123  =>  get userid 123 deets
chirpsRouter.get('/:id/', (req,res) => {
    const id = Number(req.params.id);
    const oneChirp = ChirpStore.GetChirp(id);
    res.json({id, ...oneChirp});
});

// POST api/chirps  =>  adds new chirp 
chirpsRouter.post('/', (req,res) => {
    const newChirp = req.body;
    ChirpStore.CreateChirp(newChirp);
    res.json({resMessage: `new chirp added`, newChirp});
});

// PUT api/chirps/123  =>  updates a Chirp by id 
chirpsRouter.put('/:id', (req,res) => {
    const id = Number(req.params.id);
    const editedChirp = req.body;
    ChirpStore.UpdateChirp(id, editedChirp)
    res.json({resMessage: `updated id #${id}`, editedChirp});
})

// DELETE api/chirps/123  =>  deletes a Chirp by id 
chirpsRouter.delete('/:id', (req,res) => {
    const id = Number(req.params.id);
    ChirpStore.DeleteChirp(id);
    res.json({resMessage: `deleted chirp id: ${id}`});
})

export default chirpsRouter;