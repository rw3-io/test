'use strict';

// ─── Sample data ──────────────────────────────────────────────────────────────
const SAMPLE_RECIPES = [
  {
    id: uid(),
    name: 'Classic Avocado Toast',
    category: 'Breakfast',
    time: 10,
    servings: 2,
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
    category: 'Lunch',
    time: 20,
    servings: 2,
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
    category: 'Dinner',
    time: 25,
    servings: 4,
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
    category: 'Dessert',
    time: 25,
    servings: 4,
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
    category: 'Snacks',
    time: 10,
    servings: 6,
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
    category: 'Dinner',
    time: 20,
    servings: 4,
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

function saveRecipes(data) {
  localStorage.setItem('recipeClub_recipes', JSON.stringify(data));
}

function escHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// ─── State ────────────────────────────────────────────────────────────────────
let recipes = loadRecipes() || (() => { saveRecipes(SAMPLE_RECIPES); return SAMPLE_RECIPES; })();
let activeCategory = 'All';
let searchQuery = '';
let viewingId = null;
let pendingDeleteId = null;

// ─── DOM refs ─────────────────────────────────────────────────────────────────
const grid          = document.getElementById('recipe-grid');
const emptyState    = document.getElementById('empty-state');
const countEl       = document.getElementById('recipe-count');
const searchInput   = document.getElementById('search-input');
const searchClear   = document.getElementById('search-clear');
const filterBtns    = document.querySelectorAll('.filter-btn');

// View modal
const viewModal     = document.getElementById('view-modal');
const viewBadge     = document.getElementById('view-badge');
const viewTitle     = document.getElementById('view-title');
const viewMeta      = document.getElementById('view-meta');
const viewDesc      = document.getElementById('view-description');
const viewIngreds   = document.getElementById('view-ingredients');
const viewInstrs    = document.getElementById('view-instructions');

// Add modal
const addModal      = document.getElementById('add-modal');
const addForm       = document.getElementById('add-form');
const fName         = document.getElementById('f-name');
const fCategory     = document.getElementById('f-category');
const fTime         = document.getElementById('f-time');
const fServings     = document.getElementById('f-servings');
const fDescription  = document.getElementById('f-description');
const fIngredients  = document.getElementById('f-ingredients');
const fInstructions = document.getElementById('f-instructions');

// Confirm modal
const confirmModal  = document.getElementById('confirm-modal');
const confirmName   = document.getElementById('confirm-name');

// ─── Filtering ────────────────────────────────────────────────────────────────
function filteredRecipes() {
  const q = searchQuery.toLowerCase();
  return recipes.filter(r => {
    const matchCat = activeCategory === 'All' || r.category === activeCategory;
    const matchQ   = !q || r.name.toLowerCase().includes(q) || r.description.toLowerCase().includes(q);
    return matchCat && matchQ;
  });
}

// ─── Render ───────────────────────────────────────────────────────────────────
function renderGrid() {
  const list = filteredRecipes();
  const cat  = activeCategory.toLowerCase();

  countEl.textContent = list.length === 1 ? '1 recipe' : `${list.length} recipes`;

  grid.innerHTML = '';

  if (list.length === 0) {
    emptyState.classList.remove('hidden');
    return;
  }
  emptyState.classList.add('hidden');

  list.forEach(recipe => {
    const slug = recipe.category.toLowerCase();
    const card = document.createElement('article');
    card.className = 'recipe-card';
    card.dataset.id = recipe.id;
    card.innerHTML = `
      <div class="card-bar bar-${slug}"></div>
      <div class="card-body">
        <div class="card-top">
          <span class="category-badge badge-${slug}">${escHtml(recipe.category)}</span>
          ${recipe.time ? `<span class="card-time">⏱ ${escHtml(String(recipe.time))} min</span>` : ''}
        </div>
        <h3 class="card-title">${escHtml(recipe.name)}</h3>
        <p class="card-description">${escHtml(recipe.description)}</p>
      </div>
      <div class="card-footer">
        <span style="font-size:0.82rem;color:var(--text-muted)">
          ${recipe.ingredients.length} ingredient${recipe.ingredients.length !== 1 ? 's' : ''}
          ${recipe.servings ? ` · ${recipe.servings} serving${recipe.servings !== 1 ? 's' : ''}` : ''}
        </span>
        <button class="card-view-btn view-btn">View →</button>
      </div>`;

    card.querySelector('.view-btn').addEventListener('click', e => {
      e.stopPropagation();
      openViewModal(recipe.id);
    });
    card.addEventListener('click', () => openViewModal(recipe.id));
    grid.appendChild(card);
  });
}

// ─── View modal ───────────────────────────────────────────────────────────────
function openViewModal(id) {
  const r = recipes.find(x => x.id === id);
  if (!r) return;
  viewingId = id;

  const slug = r.category.toLowerCase();
  viewBadge.textContent    = r.category;
  viewBadge.className      = `category-badge badge-${slug}`;
  viewTitle.textContent    = r.name;
  viewDesc.textContent     = r.description;

  const metaParts = [];
  if (r.time)     metaParts.push(`<span>⏱ ${escHtml(String(r.time))} min</span>`);
  if (r.servings) metaParts.push(`<span>🍽 ${escHtml(String(r.servings))} serving${r.servings !== 1 ? 's' : ''}</span>`);
  viewMeta.innerHTML = metaParts.join('<span class="meta-dot">·</span>');

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
  setTimeout(() => fName.focus(), 60);
}

function closeAddModal() {
  addModal.classList.remove('open');
  document.body.style.overflow = '';
}

function validateAdd() {
  const timeVal = parseInt(fTime.value, 10);
  const checks = [
    { id: 'fg-name',         pass: fName.value.trim().length > 0 },
    { id: 'fg-category',     pass: fCategory.value !== '' },
    { id: 'fg-time',         pass: !isNaN(timeVal) && timeVal >= 1 && timeVal <= 600 },
    { id: 'fg-description',  pass: fDescription.value.trim().length > 0 },
    { id: 'fg-ingredients',  pass: fIngredients.value.trim().length > 0 },
    { id: 'fg-instructions', pass: fInstructions.value.trim().length > 0 },
  ];
  let ok = true;
  checks.forEach(({ id, pass }) => {
    const group = document.getElementById(id);
    group.classList.toggle('has-error', !pass);
    if (!pass) ok = false;
  });
  return ok;
}

function submitRecipe() {
  if (!validateAdd()) return;

  const recipe = {
    id: uid(),
    name: fName.value.trim(),
    category: fCategory.value,
    time: parseInt(fTime.value, 10) || null,
    servings: parseInt(fServings.value, 10) || null,
    description: fDescription.value.trim(),
    ingredients: fIngredients.value.split('\n').map(l => l.trim()).filter(Boolean),
    instructions: fInstructions.value.split('\n').map(l => l.trim()).filter(Boolean),
  };

  recipes.unshift(recipe);
  saveRecipes(recipes);
  closeAddModal();
  renderGrid();
  toast('Recipe saved!', 'success');
}

// ─── Confirm / delete modal ───────────────────────────────────────────────────
function openConfirmDelete(id) {
  const r = recipes.find(x => x.id === id);
  if (!r) return;
  pendingDeleteId = id;
  confirmName.textContent = r.name;
  confirmModal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeConfirmModal() {
  confirmModal.classList.remove('open');
  pendingDeleteId = null;
  if (!viewModal.classList.contains('open')) {
    document.body.style.overflow = '';
  }
}

function executeDelete() {
  if (!pendingDeleteId) return;
  recipes = recipes.filter(r => r.id !== pendingDeleteId);
  saveRecipes(recipes);
  closeConfirmModal();
  closeViewModal();
  renderGrid();
  toast('Recipe deleted.', 'info');
}

// ─── Toast ────────────────────────────────────────────────────────────────────
const toastContainer = document.getElementById('toast-container');
const TOAST_ICONS = { success: '✅', error: '❌', info: 'ℹ️' };

function toast(message, type = 'info') {
  const el = document.createElement('div');
  el.className = `toast ${type}`;
  el.innerHTML = `<span class="toast-icon">${TOAST_ICONS[type] || 'ℹ️'}</span><span>${escHtml(message)}</span>`;
  toastContainer.appendChild(el);
  setTimeout(() => el.remove(), 3200);
}

// ─── Close-all helper ─────────────────────────────────────────────────────────
function closeAllModals() {
  [viewModal, addModal, confirmModal].forEach(m => m.classList.remove('open'));
  document.body.style.overflow = '';
  viewingId = null;
  pendingDeleteId = null;
}

// ─── Event wiring ─────────────────────────────────────────────────────────────
document.getElementById('btn-add-recipe').addEventListener('click', openAddModal);
document.getElementById('empty-add-btn').addEventListener('click', openAddModal);

document.getElementById('add-close').addEventListener('click', closeAddModal);
document.getElementById('add-cancel').addEventListener('click', closeAddModal);
document.getElementById('add-submit').addEventListener('click', submitRecipe);

document.getElementById('view-close').addEventListener('click', closeViewModal);
document.getElementById('view-close-bottom').addEventListener('click', closeViewModal);
document.getElementById('view-delete').addEventListener('click', () => {
  if (viewingId) openConfirmDelete(viewingId);
});

document.getElementById('confirm-close').addEventListener('click', closeConfirmModal);
document.getElementById('confirm-cancel').addEventListener('click', closeConfirmModal);
document.getElementById('confirm-delete').addEventListener('click', executeDelete);

// Overlay click closes modals
[viewModal, addModal, confirmModal].forEach(modal => {
  modal.addEventListener('click', e => {
    if (e.target === modal) closeAllModals();
  });
});

// Escape key
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeAllModals();
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
  searchClear.classList.toggle('hidden', searchQuery === '');
  renderGrid();
});

searchClear.addEventListener('click', () => {
  searchInput.value = '';
  searchQuery = '';
  searchClear.classList.add('hidden');
  searchInput.focus();
  renderGrid();
});

// ─── Init ─────────────────────────────────────────────────────────────────────
renderGrid();
