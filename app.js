'use strict';

// ─── Sample data ──────────────────────────────────────────────────────────────
const SAMPLE_RECIPES = [
  {
    id: uid(),
    name: 'Classic Avocado Toast',
    category: 'breakfast',
    time: '10 min',
    description: 'Creamy smashed avocado on toasted sourdough, finished with a jammy egg and a pinch of chilli flakes. A crowd-pleasing morning staple that comes together in minutes.',
    ingredients: [
      '2 slices sourdough bread',
      '1 ripe avocado',
      '2 eggs',
      '½ lemon, juiced',
      'Chilli flakes, to taste',
      'Salt & black pepper',
      'Olive oil drizzle',
    ],
    instructions: [
      'Toast the sourdough slices until golden and crisp.',
      'Halve the avocado, scoop out the flesh, and mash with lemon juice, salt, and pepper.',
      'Fry or poach the eggs to your liking.',
      'Spread the avocado mixture generously on each toast.',
      'Top with the egg, a drizzle of olive oil, and chilli flakes. Serve immediately.',
    ],
  },
  {
    id: uid(),
    name: 'Lemon Herb Chicken Salad',
    category: 'lunch',
    time: '20 min',
    description: 'Juicy grilled chicken over crisp mixed greens with cherry tomatoes, cucumber, and a bright lemon-herb vinaigrette. Light, satisfying, and endlessly customisable.',
    ingredients: [
      '2 chicken breasts',
      '4 cups mixed salad greens',
      '1 cup cherry tomatoes, halved',
      '½ cucumber, sliced',
      '¼ red onion, thinly sliced',
      '3 tbsp olive oil',
      '2 tbsp lemon juice',
      '1 tsp Dijon mustard',
      'Fresh parsley & dill',
      'Salt & pepper',
    ],
    instructions: [
      'Season chicken with salt, pepper, and a drizzle of olive oil.',
      'Grill or pan-fry over medium-high heat for 6–7 minutes per side until cooked through. Rest for 5 minutes, then slice.',
      'Whisk olive oil, lemon juice, Dijon, salt, and pepper together for the vinaigrette.',
      'Arrange greens, tomatoes, cucumber, and red onion in a large bowl.',
      'Top with sliced chicken, drizzle with vinaigrette, and finish with fresh herbs.',
    ],
  },
  {
    id: uid(),
    name: 'Spaghetti Carbonara',
    category: 'dinner',
    time: '25 min',
    description: 'The Roman classic done properly — silky egg-and-Pecorino sauce, crispy guanciale, and plenty of black pepper. No cream needed.',
    ingredients: [
      '400 g spaghetti',
      '150 g guanciale or pancetta, diced',
      '3 large eggs + 1 yolk',
      '80 g Pecorino Romano, finely grated',
      '30 g Parmesan, finely grated',
      '1 tsp coarsely ground black pepper',
      'Salt (for pasta water)',
    ],
    instructions: [
      'Cook spaghetti in well-salted boiling water until al dente; reserve 1 cup pasta water before draining.',
      'Meanwhile, cook guanciale in a cold skillet over medium heat until crispy. Remove from heat.',
      'Whisk eggs, yolk, Pecorino, and Parmesan together with lots of black pepper.',
      'Add drained pasta to the skillet with guanciale (off heat). Pour in egg mixture, tossing rapidly.',
      'Add pasta water a splash at a time, tossing, until the sauce is glossy and coats every strand. Serve at once.',
    ],
  },
  {
    id: uid(),
    name: 'Chocolate Lava Cakes',
    category: 'dessert',
    time: '25 min',
    description: 'Warm, fudgy individual chocolate cakes with a molten centre that flows when you break in. Elegant enough for dinner parties, easy enough for a weeknight treat.',
    ingredients: [
      '115 g dark chocolate (70%), chopped',
      '115 g unsalted butter, plus extra for moulds',
      '2 large eggs',
      '2 egg yolks',
      '100 g caster sugar',
      '2 tbsp plain flour',
      'Pinch of salt',
      'Cocoa powder, for dusting',
      'Vanilla ice cream, to serve',
    ],
    instructions: [
      'Preheat oven to 220 °C / 425 °F. Butter four ramekins and dust with cocoa powder.',
      'Melt chocolate and butter together in a heatproof bowl over simmering water; stir until smooth. Cool slightly.',
      'Whisk eggs, yolks, and sugar until thick and pale, about 2 minutes.',
      'Fold the chocolate mixture into the egg mixture, then sift in flour and salt; fold gently.',
      'Divide batter among ramekins. Bake for 10–12 minutes until edges are set but centres still wobble. Invert onto plates and serve immediately with ice cream.',
    ],
  },
  {
    id: uid(),
    name: 'Homemade Guacamole',
    category: 'snacks',
    time: '10 min',
    description: 'Chunky, fresh guacamole made with ripe avocados, lime, coriander, and jalapeño. Perfect with tortilla chips or as a topping for tacos and burritos.',
    ingredients: [
      '3 ripe avocados',
      '1 lime, juiced',
      '1 jalapeño, finely minced (seeds removed for less heat)',
      '¼ red onion, finely diced',
      '2 tbsp fresh coriander, chopped',
      '1 garlic clove, minced',
      'Salt to taste',
      'Tortilla chips, to serve',
    ],
    instructions: [
      'Halve and pit the avocados; scoop flesh into a bowl.',
      'Add lime juice immediately and mash to your preferred texture — chunky or smooth.',
      'Fold in jalapeño, red onion, coriander, and garlic.',
      'Season well with salt. Taste and adjust lime or salt as needed.',
      'Press cling film directly onto the surface to prevent browning. Serve within 1 hour with chips.',
    ],
  },
  {
    id: uid(),
    name: 'Honey Garlic Salmon',
    category: 'dinner',
    time: '20 min',
    description: 'Pan-seared salmon fillets glazed with a sticky honey-garlic sauce that caramelises beautifully. Ready in 20 minutes with just a handful of pantry ingredients.',
    ingredients: [
      '4 salmon fillets (skin-on)',
      '3 tbsp honey',
      '3 garlic cloves, minced',
      '2 tbsp soy sauce',
      '1 tbsp rice vinegar',
      '1 tbsp olive oil',
      'Salt & pepper',
      'Fresh parsley & sesame seeds, to garnish',
    ],
    instructions: [
      'Pat salmon dry and season with salt and pepper.',
      'Mix honey, garlic, soy sauce, and rice vinegar together in a small bowl.',
      'Heat oil in a skillet over medium-high heat. Cook salmon skin-side up for 4 minutes until golden, then flip.',
      'Pour the honey-garlic sauce over the fish. Cook for a further 3–4 minutes, basting constantly, until salmon is cooked through and sauce is sticky.',
      'Garnish with parsley and sesame seeds; serve with rice or steamed vegetables.',
    ],
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────
function uid() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}

function loadRecipes() {
  try {
    const stored = localStorage.getItem('recipeClub_recipes');
    if (stored) return JSON.parse(stored);
  } catch (_) {}
  return null;
}

function saveRecipes(recipes) {
  localStorage.setItem('recipeClub_recipes', JSON.stringify(recipes));
}

function cap(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// ─── State ────────────────────────────────────────────────────────────────────
let recipes = loadRecipes() || (() => {
  saveRecipes(SAMPLE_RECIPES);
  return SAMPLE_RECIPES;
})();

let activeCategory = 'all';
let searchQuery = '';
let viewingId = null;

// ─── DOM refs ─────────────────────────────────────────────────────────────────
const grid          = document.getElementById('recipe-grid');
const countEl       = document.getElementById('recipe-count');
const searchInput   = document.getElementById('search-input');
const filterBtns    = document.querySelectorAll('.filter-btn');

const viewModal     = document.getElementById('view-modal');
const viewTitle     = document.getElementById('view-title');
const viewMeta      = document.getElementById('view-meta');
const viewDesc      = document.getElementById('view-description');
const viewIngreds   = document.getElementById('view-ingredients');
const viewInstrs    = document.getElementById('view-instructions');

const addModal      = document.getElementById('add-modal');
const addForm       = document.getElementById('add-form');
const fName         = document.getElementById('f-name');
const fCategory     = document.getElementById('f-category');
const fTime         = document.getElementById('f-time');
const fDescription  = document.getElementById('f-description');
const fIngredients  = document.getElementById('f-ingredients');
const fInstructions = document.getElementById('f-instructions');

// ─── Render ───────────────────────────────────────────────────────────────────
function filteredRecipes() {
  const q = searchQuery.toLowerCase();
  return recipes.filter(r => {
    const matchCat = activeCategory === 'all' || r.category === activeCategory;
    const matchQ   = !q || r.name.toLowerCase().includes(q) || r.description.toLowerCase().includes(q);
    return matchCat && matchQ;
  });
}

function renderGrid() {
  const list = filteredRecipes();
  countEl.textContent = list.length === 1 ? '1 recipe' : `${list.length} recipes`;

  grid.innerHTML = '';

  if (list.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <span class="empty-icon">🍽</span>
        <h3>No recipes found</h3>
        <p>Try adjusting your search or filter, or add a new recipe to get started.</p>
        <button class="btn btn-accent" onclick="openAddModal()">+ Add Recipe</button>
      </div>`;
    return;
  }

  list.forEach(recipe => {
    const card = document.createElement('article');
    card.className = 'recipe-card';
    card.dataset.id = recipe.id;
    card.innerHTML = `
      <div class="card-color-bar bar-${recipe.category}"></div>
      <div class="card-body">
        <div class="card-top">
          <span class="category-badge badge-${recipe.category}">${cap(recipe.category)}</span>
          ${recipe.time ? `<span class="card-time">⏱ ${recipe.time}</span>` : ''}
        </div>
        <h3 class="card-title">${escHtml(recipe.name)}</h3>
        <p class="card-description">${escHtml(recipe.description)}</p>
      </div>
      <div class="card-footer">
        <span style="font-size:0.82rem;color:var(--color-text-muted)">
          ${recipe.ingredients.length} ingredient${recipe.ingredients.length !== 1 ? 's' : ''}
          &nbsp;·&nbsp; ${recipe.instructions.length} step${recipe.instructions.length !== 1 ? 's' : ''}
        </span>
        <button class="btn btn-ghost btn-sm view-btn">View Recipe →</button>
      </div>`;

    card.querySelector('.view-btn').addEventListener('click', e => {
      e.stopPropagation();
      openViewModal(recipe.id);
    });
    card.addEventListener('click', () => openViewModal(recipe.id));
    grid.appendChild(card);
  });
}

function escHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// ─── View modal ───────────────────────────────────────────────────────────────
function openViewModal(id) {
  const r = recipes.find(x => x.id === id);
  if (!r) return;
  viewingId = id;

  viewTitle.textContent = r.name;
  viewMeta.innerHTML = `
    <span class="category-badge badge-${r.category}">${cap(r.category)}</span>
    ${r.time ? `<span style="font-size:0.9rem;color:var(--color-text-muted)">⏱ ${escHtml(r.time)}</span>` : ''}`;

  viewDesc.textContent = r.description;

  viewIngreds.innerHTML = r.ingredients
    .map(i => `<li>${escHtml(i)}</li>`)
    .join('');

  viewInstrs.innerHTML = r.instructions
    .map((s, i) => `<li><span class="step-num">${i + 1}</span><span>${escHtml(s)}</span></li>`)
    .join('');

  viewModal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeViewModal() {
  viewModal.classList.remove('open');
  document.body.style.overflow = '';
  viewingId = null;
}

// ─── Add modal ────────────────────────────────────────────────────────────────
function openAddModal() {
  addForm.reset();
  document.querySelectorAll('.form-group.has-error').forEach(el => el.classList.remove('has-error'));
  addModal.classList.add('open');
  document.body.style.overflow = 'hidden';
  fName.focus();
}

function closeAddModal() {
  addModal.classList.remove('open');
  document.body.style.overflow = '';
}

function validateAdd() {
  let ok = true;
  const required = [
    { id: 'fg-name',         field: fName,         check: () => fName.value.trim() },
    { id: 'fg-category',     field: fCategory,     check: () => fCategory.value },
    { id: 'fg-description',  field: fDescription,  check: () => fDescription.value.trim() },
    { id: 'fg-ingredients',  field: fIngredients,  check: () => fIngredients.value.trim() },
    { id: 'fg-instructions', field: fInstructions, check: () => fInstructions.value.trim() },
  ];
  required.forEach(({ id, check }) => {
    const group = document.getElementById(id);
    if (check()) {
      group.classList.remove('has-error');
    } else {
      group.classList.add('has-error');
      ok = false;
    }
  });
  return ok;
}

function submitRecipe() {
  if (!validateAdd()) return;

  const recipe = {
    id: uid(),
    name: fName.value.trim(),
    category: fCategory.value,
    time: fTime.value.trim(),
    description: fDescription.value.trim(),
    ingredients: fIngredients.value.split('\n').map(l => l.trim()).filter(Boolean),
    instructions: fInstructions.value.split('\n').map(l => l.trim()).filter(Boolean),
  };

  recipes.unshift(recipe);
  saveRecipes(recipes);
  closeAddModal();
  renderGrid();
  toast('Recipe added!', 'success');
}

// ─── Delete ───────────────────────────────────────────────────────────────────
function deleteRecipe(id) {
  if (!confirm('Delete this recipe? This cannot be undone.')) return;
  recipes = recipes.filter(r => r.id !== id);
  saveRecipes(recipes);
  closeViewModal();
  renderGrid();
  toast('Recipe deleted.', 'info');
}

// ─── Toast ────────────────────────────────────────────────────────────────────
function toast(message, type = 'info') {
  const icons = { success: '✅', error: '❌', info: 'ℹ️' };
  const container = document.getElementById('toast-container');
  const el = document.createElement('div');
  el.className = `toast ${type}`;
  el.innerHTML = `<span class="toast-icon">${icons[type] || 'ℹ️'}</span><span>${escHtml(message)}</span>`;
  container.appendChild(el);
  setTimeout(() => el.remove(), 3200);
}

// ─── Event wiring ─────────────────────────────────────────────────────────────
document.getElementById('btn-add-recipe').addEventListener('click', openAddModal);
document.getElementById('add-close').addEventListener('click', closeAddModal);
document.getElementById('add-cancel').addEventListener('click', closeAddModal);
document.getElementById('add-submit').addEventListener('click', submitRecipe);

document.getElementById('view-close').addEventListener('click', closeViewModal);
document.getElementById('view-close-bottom').addEventListener('click', closeViewModal);
document.getElementById('view-delete').addEventListener('click', () => {
  if (viewingId) deleteRecipe(viewingId);
});

// Close modals on overlay click
[viewModal, addModal].forEach(modal => {
  modal.addEventListener('click', e => {
    if (e.target === modal) {
      viewModal.classList.remove('open');
      addModal.classList.remove('open');
      document.body.style.overflow = '';
      viewingId = null;
    }
  });
});

// Close modals on Escape
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    viewModal.classList.remove('open');
    addModal.classList.remove('open');
    document.body.style.overflow = '';
    viewingId = null;
  }
});

// Category filters
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeCategory = btn.dataset.category;
    renderGrid();
  });
});

// Search
searchInput.addEventListener('input', () => {
  searchQuery = searchInput.value;
  renderGrid();
});

// ─── Init ─────────────────────────────────────────────────────────────────────
renderGrid();
