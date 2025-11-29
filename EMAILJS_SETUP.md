# Configuration EmailJS pour le formulaire de contact

Pour que le formulaire de contact fonctionne et envoie des emails à votre adresse Gmail (haitamboulhna19@gmail.com), vous devez configurer EmailJS.

## Étapes de configuration

### 1. Créer un compte EmailJS
1. Allez sur [https://www.emailjs.com/](https://www.emailjs.com/)
2. Créez un compte gratuit (100 emails/mois gratuits)

### 2. Configurer un service email
1. Dans le dashboard EmailJS, allez dans **Email Services**
2. Cliquez sur **Add New Service**
3. Sélectionnez **Gmail** (ou votre service email préféré)
4. Suivez les instructions pour connecter votre compte Gmail
5. Notez le **Service ID** (ex: `service_xxxxx`)

### 3. Créer un template d'email
1. Allez dans **Email Templates**
2. Cliquez sur **Create New Template**
3. Configurez le template avec les variables suivantes :
   - `{{from_name}}` - Nom de l'expéditeur
   - `{{from_email}}` - Email de l'expéditeur
   - `{{subject}}` - Sujet du message
   - `{{message}}` - Message
   - `{{to_email}}` - Votre email (haitamboulhna19@gmail.com)

4. Exemple de template :
   ```
   Nouveau message depuis votre portfolio
   
   De: {{from_name}} ({{from_email}})
   Sujet: {{subject}}
   
   Message:
   {{message}}
   ```

5. Dans les paramètres du template, définissez :
   - **To Email**: `haitamboulhna19@gmail.com`
   - **From Name**: `{{from_name}}`
   - **Reply To**: `{{from_email}}`

6. Notez le **Template ID** (ex: `template_xxxxx`)

### 4. Obtenir votre clé publique
1. Allez dans **Account** > **General**
2. Copiez votre **Public Key** (ex: `xxxxxxxxxxxxx`)

### 5. Configurer les variables d'environnement
1. Créez un fichier `.env` à la racine du projet
2. Ajoutez les variables suivantes :

```env
VITE_EMAILJS_SERVICE_ID=votre_service_id
VITE_EMAILJS_TEMPLATE_ID=votre_template_id
VITE_EMAILJS_PUBLIC_KEY=votre_public_key
```

3. Remplacez les valeurs par vos propres clés obtenues précédemment

### 6. Redémarrer le serveur de développement
Après avoir créé le fichier `.env`, redémarrez votre serveur de développement :
```bash
npm run dev
```

## Test
Une fois configuré, testez le formulaire de contact. Vous devriez recevoir les emails à haitamboulhna19@gmail.com.

## Notes importantes
- Ne commitez jamais le fichier `.env` dans Git (il est déjà dans `.gitignore`)
- Les variables d'environnement doivent commencer par `VITE_` pour être accessibles dans Vite
- Le plan gratuit d'EmailJS permet 100 emails par mois


