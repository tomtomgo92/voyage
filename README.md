# Site de vote « Mars 2027 : on part où ? »

- Fichiers du site : la racine du dépôt (index.html, style.css, app.js, config.js, content.js, credits.js, img/)
- **Prix** : `config.js` (vols, hôtels, transports, budget/jour, formalités). Le total se recalcule tout seul.
- **Textes** (pitch, itinéraires, santé, drone, sécurité, périodes) : `content.js`
- Backend : Supabase, projet `voyage-vote-2027` (ref `rnvcqzkpujzelipsjnyq`, eu-west-3, org THATMUCH).
  Table `public.votes` (RLS active, aucun accès direct anon) + RPC `cast_vote`, `vote_results` (anon) et `reset_votes` (admin uniquement).
- **Remettre les votes à zéro** : SQL `select public.reset_votes();` (connecteur Supabase execute_sql ou SQL editor).
- Aperçu local : `python3 -m http.server 8799`
- Déploiement Firebase Hosting (une fois connecté) : `firebase.json` pointe sur la racine du dépôt.

## Mise à jour
Modifier `config.js` (prix) ou `content.js` (textes), puis `git commit` + `git push` sur `main` : GitHub Pages redéploie tout seul en 1 à 2 minutes.
URL : https://tomtomgo92.github.io/voyage/
