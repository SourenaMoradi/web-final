window.onload = function () {
  const form = document.querySelector("form");
  form.onsubmit = validate;
};

function validate(event) {

  const latitudeValue = parseInt(
    document.querySelector('input[name="latitude"]').value,
    10
  );
  const longitudeValue = parseInt(
    document.querySelector('input[name="longitude"]').value,
    10
  );
  const latitudeErrorEl = document.querySelector('[data-errorFor="latitude"]');
  const longitudeErrorEl = document.querySelector(
    '[data-errorFor="longitude"]'
  );
  const latitudeValid =
    !isNaN(latitudeValue) && latitudeValue >= -90 && latitudeValue <= 90;
  const longitudeValid =
    !isNaN(longitudeValue) && longitudeValue >= -180 && longitudeValue <= 180;

  latitudeErrorEl.classList.add("hidden");
  longitudeErrorEl.classList.add("hidden");

  if (!latitudeValid) latitudeErrorEl.classList.remove("hidden");
  if (!longitudeValid) longitudeErrorEl.classList.remove("hidden");
  if (!latitudeValid || !longitudeValid) event.preventDefault();
}

