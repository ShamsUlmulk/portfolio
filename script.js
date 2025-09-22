// Smooth scroll (for My Services / Hire Me buttons)
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const id=a.getAttribute('href').slice(1);
    const el=document.getElementById(id);
    if(el){
      e.preventDefault();
      el.scrollIntoView({behavior:'smooth', block:'start'});
    }
  });
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Simple contact form demo (replace with backend/form service later)
function handleSubmit(e){
  e.preventDefault();
  const form=e.target;
  const status=document.getElementById('form-status');
  const data=Object.fromEntries(new FormData(form).entries());
  if(!data.name || !data.email || !data.message){
    status.textContent='Please fill out all fields.';
    return false;
  }
  status.textContent='Thanks! Your message has been captured (demo).';
  form.reset();
  return false;
}
